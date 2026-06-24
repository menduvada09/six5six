import { useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({
  productImage,
  productName,
  show,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toastCard}>
        {productImage && (
          <div className={styles.toastImageWrapper}>
            <img
              src={productImage}
              alt={productName}
              className={styles.toastImage}
            />
          </div>
        )}
        <div className={styles.toastContent}>
          <p className={styles.productName}>{productName}</p>
          <p className={styles.statusText}>Added to saved</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
