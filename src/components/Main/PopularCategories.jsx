import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PopularCategories.module.css";

const PopularCategories = () => {
  const [activeTab, setActiveTab] = useState("Men");

  const categoriesData = {
    Men: [
      {
        id: 1,
        name: "T-SHIRTS & TOPS",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
      {
        id: 2,
        name: "HOODIES",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
      {
        id: 3,
        name: "SHORTS",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
      {
        id: 4,
        name: "POLOS",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
    ],
    Women: [
      {
        id: 5,
        name: "CROP TOPS & TEES",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
      {
        id: 6,
        name: "HOODIES & SWEATSHIRTS",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
      {
        id: 7,
        name: "SHORTS & TRACKPANTS",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
      {
        id: 8,
        name: "SPORTS BRA",
        image:
          "//six5six.in/cdn/shop/files/24_July_Six5six_ActiveWear-1779copy.jpg?v=1723125291&amp;width=1946",
      },
    ],
  };

  const currentCategories = categoriesData[activeTab];

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.leftHeader}>
          <h2 className={styles.title}>Popular Categories</h2>
          <div className={styles.tabGroup}>
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
      </div>

      <div className={styles.grid}>
        {currentCategories.map((category) => (
          <div key={category.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={category.image}
                alt={category.name}
                className={styles.image}
              />
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/new-in">
        <button className={styles.discoverButton}>Discover more</button>
      </Link>
    </section>
  );
};

export default PopularCategories;
