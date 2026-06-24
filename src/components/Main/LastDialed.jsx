import styles from "./LastDialed.module.css";
import { useState } from "react";
import ProductSideModal from "../Products/ProductSideModal";

const LastDialed = ({
  onAddToCart,
  wishlistItems = [],
  onOpenWishlistModal,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "40% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Away Jersey Player version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.5",
    },
    {
      id: 2,
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "40% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Home Jersey Player version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.4",
    },
    {
      id: 3,
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "40% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Third Jersey Player version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.5",
    },
    {
      id: 4,
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "20% OFF",
      season: "2025-26",
      title: "FC Goa - Home Jersey Player version",
      originalPrice: "Rs. 2,400",
      discountedPrice: "Rs. 1,900",
      rating: "4.7",
    },
    {
      id: 5,
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "20% OFF",
      season: "2025-26",
      title: "FC Goa - Away Jersey Player version",
      originalPrice: "Rs. 2,400",
      discountedPrice: "Rs. 1,900",
      rating: "4.6",
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
      (item) => String(item.id) === String(product.id)
    );

    if (!isAlreadyWishlisted && onOpenWishlistModal) {
      onOpenWishlistModal(product);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <div className={styles.leftHeader}>
          <h3 className={styles.title}>LATEST.DIALED.IN</h3>
        </div>
        <button className={styles.shopAllButton}>Discover more</button>
      </div>

      <div className={styles.grid}>
        {products.map((product) => {
          const isWishlisted = wishlistItems.some(
            (item) => String(item.id) === String(product.id)
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
                      className={styles.ratingStar}
                    />
                    <span className={styles.ratingNumber}>
                      {product.rating}
                    </span>
                    <img
                      src="/img/rating2.svg"
                      alt=""
                      className={styles.ratingStar}
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

export default LastDialed;
