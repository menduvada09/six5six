import { useState } from "react";
import styles from "./Men.module.css";
import ProductList from "../Products/ProductList";
import AdvanceFilter from "../Products/AdvanceFilter";

const Men = ({ onAddToCart, wishlistItems = [], onOpenWishlistModal }) => {
  const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);
  const teams = ["FC GOA", "six5six2025", "All Products"];

  return (
    <>
      <div className={styles.filterBarContainer}>
        <h6 className={styles.filterTitle}>six5six2025</h6>

        <div className={styles.tagList}>
          {teams.map((team, index) => (
            <button key={index} className={styles.tagButton}>
              {team}
            </button>
          ))}
        </div>

        <button
          className={styles.advanceFilterButton}
          onClick={() => setIsAdvanceOpen(true)}
        >
          Advance Filter
        </button>
      </div>

      <ProductList
        className={styles.Products}
        onAddToCart={onAddToCart}
        wishlistItems={wishlistItems}
        onOpenWishlistModal={onOpenWishlistModal}
        showFilter={false}
      />

      <AdvanceFilter
        isOpen={isAdvanceOpen}
        onClose={() => setIsAdvanceOpen(false)}
      />
    </>
  );
};

export default Men;
