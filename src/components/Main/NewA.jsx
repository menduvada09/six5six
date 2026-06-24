import styles from "./NewA.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductSideModal from "../Products/ProductSideModal";

const NewA = ({ onAddToCart, wishlistItems = [], onOpenWishlistModal }) => {
  const [activeTab, setActiveTab] = useState("Men");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      gender: "Men",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "40% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Away Jersey Player version (Men)",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.5",
    },
    {
      id: 2,
      gender: "Men",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "40% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Home Jersey Player version (Men)",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.4",
    },
    {
      id: 3,
      gender: "Men",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "40% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Third Jersey Player version (Men)",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.5",
    },
    {
      id: 4,
      gender: "Men",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "20% OFF",
      season: "2025-26",
      title: "FC Goa - Home Jersey Player version (Men)",
      originalPrice: "Rs. 2,400",
      discountedPrice: "Rs. 1,900",
      rating: "4.7",
    },
    {
      id: 5,
      gender: "Men",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "20% OFF",
      season: "2025-26",
      title: "FC Goa - Away Jersey Player version (Men)",
      originalPrice: "Rs. 2,400",
      discountedPrice: "Rs. 1,900",
      rating: "4.6",
    },
    {
      id: 6,
      gender: "Women",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "30% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Away Jersey Women version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,199",
      rating: "4.6",
    },
    {
      id: 7,
      gender: "Women",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "30% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Home Jersey Women version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,199",
      rating: "4.5",
    },
    {
      id: 8,
      gender: "Women",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "30% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Third Jersey Women version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,199",
      rating: "4.4",
    },
    {
      id: 9,
      gender: "Women",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "20% OFF",
      season: "2025-26",
      title: "FC Goa - Home Jersey Women version",
      originalPrice: "Rs. 2,400",
      discountedPrice: "Rs. 1,900",
      rating: "4.8",
    },
    {
      id: 10,
      gender: "Women",
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "20% OFF",
      season: "2025-26",
      title: "FC Goa - Away Jersey Women version",
      originalPrice: "Rs. 2,400",
      discountedPrice: "Rs. 1,900",
      rating: "4.7",
    },
  ];

  const handleAddClick = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBookmarkClick = (e, product) => {
    e.stopPropagation();
    const isAlreadyWishlisted = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (!isAlreadyWishlisted && onOpenWishlistModal) {
      onOpenWishlistModal(product);
    }
  };

  const filteredProducts = products.filter(
    (product) => product.gender === activeTab
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <div className={styles.leftHeader}>
          <h2 className={styles.title}>New arrival</h2>
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "Men" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("Men")}
            >
              Men
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "Women" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("Women")}
            >
              Women
            </button>
          </div>
        </div>
        <Link to="/new-in">
          <button className={styles.shopAllButton}>Discover More</button>
        </Link>
      </div>

      <div className={styles.grid}>
        {filteredProducts.map((product) => {
          const isWishlisted = wishlistItems.some(
            (item) => item.id === product.id
          );

          return (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <div className={styles.badgeRow}>
                  <span className={styles.discountBadge}>
                    {product.discount}
                  </span>
                  <span className={styles.seasonBadge}>{product.season}</span>
                </div>
                <button
                  className={styles.bookmarkButton}
                  aria-label="Save item"
                  onClick={(e) => handleBookmarkClick(e, product)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={isWishlisted ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                  </svg>
                </button>

                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImg}
                />
                <div className={styles.ratingBadgeContainer}>
                  <div className={styles.ratingContent}>
                    <img
                      src="/img/rating1.svg"
                      alt=""
                      className={styles.ratingStarLeft}
                    />
                    <span className={styles.ratingNumber}>
                      {product.rating}
                    </span>
                    <img
                      src="/img/rating2.svg"
                      alt=""
                      className={styles.ratingStarRight}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.detailsContainer}>
                <div className={styles.topDetailsRow}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <button
                    className={styles.addButton}
                    onClick={(e) => handleAddClick(e, product)}
                  >
                    <span className={styles.addText}>ADD</span>
                    <div className={styles.btnIconContainer}>
                      <div className={styles.btnHandle}></div>
                      <div className={styles.btnBagBody}></div>
                    </div>
                  </button>
                </div>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>
                    {product.originalPrice}
                  </span>
                  <span className={styles.currentPrice}>
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <ProductSideModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
};

export default NewA;
