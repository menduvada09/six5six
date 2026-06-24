import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Wishlist.module.css";
import Footer from "./Footer";

export default function Wishlist({
  wishlistItems = [],
  onRemoveFromWishlist,
  onAddToCart,
}) {
  const navigate = useNavigate();
  const [activeMenuId, setActiveMenuId] = useState(null);

  const toggleMenu = (e, id) => {
    e.stopPropagation();
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  const handleRemove = (e, id) => {
    e.stopPropagation();
    if (onRemoveFromWishlist) {
      onRemoveFromWishlist(id);
    }
    setActiveMenuId(null);
  };

  const handleAddToCartClick = (item) => {
    const productData = {
      id: item.id,
      title: item.title,
      price: item.price || 1900,
      size: item.size,
      image: item.image,
      customNumber: item.customNumber || null,
      customName: item.customName || null,
    };

    if (onAddToCart) {
      onAddToCart(productData);
    }
  };

  return (
    <>
      <div
        className={styles.wishlistPage}
        onClick={() => setActiveMenuId(null)}
      >
        <div className={styles.topSection}>
          <div className={styles.infoTextContainer}>
            <h2 className={styles.mainHeading}>
              Your collections are to stay here forever!
            </h2>
            <p className={styles.subHeading}>
              Login to save your stuff for good and access them whenever,
              wherever!
            </p>
          </div>
          <button
            className={styles.loginSaveBtn}
            onClick={() => navigate("/login")}
          >
            Login to Save <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>

        {wishlistItems.length > 0 ? (
          <div className={styles.productGrid}>
            {wishlistItems.map((item) => (
              <div key={item.wishlistId} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.productImage}
                  />

                  <button
                    className={styles.optionsBtn}
                    onClick={(e) => toggleMenu(e, item.wishlistId)}
                  >
                    &#8942;
                  </button>

                  {activeMenuId === item.wishlistId && (
                    <div
                      className={styles.dropdownMenu}
                      onClick={(e) => handleRemove(e, item.wishlistId)}
                    >
                      <svg
                        width="1vw"
                        height="1vw"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e63946"
                        strokeWidth="2"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                      <span>Remove from list</span>
                    </div>
                  )}
                </div>

                <div className={styles.productDetails}>
                  <h4 className={styles.productTitle}>{item.title}</h4>
                  <div className={styles.priceAndSize}>
                    <span className={styles.currentPrice}>
                      {item.currentPrice || item.discountedPrice}
                    </span>
                    {item.originalPrice && (
                      <span className={styles.discountedPrice}>
                        {item.originalPrice}
                      </span>
                    )}
                    <span className={styles.divider}>|</span>
                    <span className={styles.selectedSize}>{item.size}</span>
                  </div>
                </div>

                <button
                  className={styles.addToCartBtn}
                  onClick={() => handleAddToCartClick(item)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.mainContent}>
            <div className={styles.heartIconWrapper}>
              <svg
                width="2vw"
                height="2vw"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#800080"
                />
              </svg>
            </div>

            <h3 className={styles.contentTitle}>Save things as you browse</h3>
            <p className={styles.contentDescription}>
              Tap <span className={styles.heartSymbol}>&#9825;</span> on any
              product. It lands here so you don't lose it.
            </p>

            <div className={styles.alertBox}>
              <span className={styles.clockIcon}>&#9201;</span>
              <p className={styles.alertText}>
                Saves stay through this session.{" "}
                <strong>Log in to keep them permanently.</strong>
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <button
                className={styles.outlineBtn}
                onClick={() => navigate("/login")}
              >
                Log in to save permanently{" "}
                <span className={styles.btnArrow}>&rarr;</span>
              </button>
              <button className={styles.plainBtn} onClick={() => navigate("/")}>
                Keep browsing first
              </button>
            </div>

            <p className={styles.noAccountText}>
              No account?{" "}
              <a href="/register" className={styles.signupLink}>
                Sign up &mdash; it takes a minute
              </a>
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
