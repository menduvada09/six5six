import { useState } from "react";
import styles from "./NewArrivals.module.css";

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("Men");

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
      title: "Chennaiyin FC - Away Jersey Player version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.5",
    },
    {
      id: 3,
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
      id: 4,
      image:
        "https://six5six.in/cdn/shop/files/CFC-Away-FrontLarge_6e9bdb64-2f81-4524-9676-13814f5916a6.jpg?v=1725009913&width=823",
      discount: "40% OFF",
      season: "2025-26",
      title: "Chennaiyin FC - Away Jersey Player version",
      originalPrice: "Rs. 1,499",
      discountedPrice: "Rs. 1,125",
      rating: "4.5",
    },
  ];

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
        <button className={styles.shopAllButton}>Shop all</button>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <div className={styles.badgeRow}>
                <span className={styles.discountBadge}>{product.discount}</span>
                <span className={styles.seasonBadge}>{product.season}</span>
              </div>
              <button className={styles.bookmarkButton} aria-label="Save item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                </svg>
              </button>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImg}
              />
              <div className={styles.ratingBadgeContainer}>
                <span className={styles.ratingNumber}>({product.rating})</span>
              </div>
            </div>

            <div className={styles.detailsContainer}>
              <div className={styles.topDetailsRow}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <button className={styles.addButton}>
                  <span className={styles.addText}>ADD</span>
                  <div className={styles.btnIconContainer}>
                    <div className={styles.btnHandle}></div>
                    <div className={styles.btnBagBody}></div>
                  </div>
                </button>
              </div>
              <div className={styles.priceContainer}>
                <span className={styles.oldPrice}>{product.originalPrice}</span>
                <span className={styles.currentPrice}>
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
