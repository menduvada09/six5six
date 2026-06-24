import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Main from "./components/Main/Main";
import ProductList from "./components/Products/ProductList";
import Navbar from "./components/Main/Navbar";
import Men from "./components/Men/Men";
import ProductDetail from "./components/Products/ProductDetails";
import Cart from "./components/Main/Cart";
import Login from "./components/Login/Login";
import ResetPassword from "./components/Login/ResetPassword";
import Register from "./components/Login/Register";
import Wishlist from "./components/Main/Wishlist";
import WishlistSizeModal from "./components/Main/WishlistSizeModal";
import Policy from "./components/Pages/Policy";
import OurStory from "./components/Pages/OurStory";
import ContactUs from "./components/Pages/ContactUs";
import ReturnsPolicy from "./components/Pages/ReturnsPolicy";
import Blogs from "./components/Pages/Blogs";
import FAQ from "./components/Pages/FAQ";
import Checkout from "./components/Main/Checkout";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart_items");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist_items");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [activeWishlistProduct, setActiveWishlistProduct] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist_items", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          String(item.customName) === String(product.customName) &&
          String(item.customNumber) === String(product.customNumber)
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1,
        };
        return newItems;
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const openWishlistModal = (product) => {
    setActiveWishlistProduct(product);
    setIsWishlistModalOpen(true);
  };

  const addToWishlist = (product, selectedSize) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingItem) {
        return prevItems;
      }

      const newItem = {
        ...product,
        size: selectedSize,
        currentPrice: product.discountedPrice,
        image: product.image,
        wishlistId: `${product.id}-${selectedSize}-${Date.now()}`,
      };
      return [...prevItems, newItem];
    });
  };

  const handleUpdateQuantity = (id, size, customName, customNumber, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.size === size &&
        String(item.customName) === String(customName) &&
        String(item.customNumber) === String(customNumber)
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, size, customName, customNumber) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size &&
            String(item.customName) === String(customName) &&
            String(item.customNumber) === String(customNumber)
          )
      )
    );
  };

  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemoveFromWishlist = (wishlistId) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.wishlistId !== wishlistId)
    );
  };

  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {isWishlistModalOpen && activeWishlistProduct && (
          <WishlistSizeModal
            product={activeWishlistProduct}
            onClose={() => {
              setIsWishlistModalOpen(false);
              setActiveWishlistProduct(null);
            }}
            onAddToWishlist={addToWishlist}
          />
        )}

        <Routes>
          <Route
            element={
              <>
                <Navbar
                  onCartClick={() => setIsCartOpen(true)}
                  cartCount={totalCartCount}
                />
                <div>
                  <Outlet />
                </div>
              </>
            }
          >
            <Route
              path="/"
              element={
                <Main
                  onAddToCart={addToCart}
                  wishlistItems={wishlistItems}
                  onOpenWishlistModal={openWishlistModal}
                />
              }
            />
            <Route
              path="/new-in"
              element={
                <ProductList
                  onAddToCart={addToCart}
                  wishlistItems={wishlistItems}
                  onOpenWishlistModal={openWishlistModal}
                />
              }
            />
            <Route
              path="/men"
              element={
                <Men
                  onAddToCart={addToCart}
                  wishlistItems={wishlistItems}
                  onOpenWishlistModal={openWishlistModal}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  onAddToCart={addToCart}
                  setWishlistItems={setWishlistItems}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlistItems={wishlistItems}
                  onRemoveFromWishlist={handleRemoveFromWishlist}
                  onAddToCart={addToCart}
                />
              }
            />
            <Route path="/policy/:type" element={<Policy />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/refund-return" element={<ReturnsPolicy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
          <Route
            path="/checkout"
            element={
              <Checkout
                items={cartItems}
                onCartClick={() => setIsCartOpen(true)}
                cartCount={totalCartCount}
                closeCart={() => setIsCartOpen(false)}
              />
            }
          />
        </Routes>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      </div>
    </Router>
  );
}

export default App;
