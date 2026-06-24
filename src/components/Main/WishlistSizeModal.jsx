import { useState } from "react";
import styles from "./WishlistSizeModal.module.css";
import Toast from "./Toast";

const WishlistSizeModal = ({ product, onClose, onAddToWishlist }) => {
  const sizes = ["2XL", "XL", "L", "M", "S", "XS", "3XL", "4XL"];
  const [selectedSize, setSelectedSize] = useState("2XL");
  const [toast, setToast] = useState({ show: false, name: "", image: "" });

  const handleSubmit = () => {
    onAddToWishlist(product, selectedSize);

    setToast({
      show: true,
      name: product.title,
      image: product.image,
    });

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <Toast
        show={toast.show}
        productName={toast.name}
        productImage={toast.image}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Add To List</span>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 9 9"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M1.95594 8.854L0.83313 7.7312L3.72035 4.84398L0.83313 1.97681L1.95594 0.854004L4.84315 3.74122L7.71032 0.854004L8.83313 1.97681L5.94591 4.84398L8.83313 7.7312L7.71032 8.854L4.84315 5.96679L1.95594 8.854Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>

        <div className={styles.modalBody}>
          <h4 className={styles.productName}>{product.title}</h4>
          <p className={styles.productPrice}>
            {product.discountedPrice || product.currentPrice}
          </p>

          <span className={styles.sizeLabel}>Size</span>
          <div className={styles.sizeGrid}>
            {sizes.map((size) => (
              <button
                key={size}
                className={`${styles.sizeBtn} ${
                  selectedSize === size ? styles.activeSize : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <button className={styles.submitBtn} onClick={handleSubmit}>
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistSizeModal;
