import { useEffect } from "react";
import createPortal from "react-dom";
import styles from "./Filter.module.css";

const AdvanceFilter = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = [
    { name: "Measuring Wheels", count: 2 },
    { name: "Outfit Sets", count: 24 },
    { name: "Soccer Uniforms", count: 2 },
    { name: "Sports Uniforms", count: 1 },
    { name: "T-Shirts", count: 2 },
  ];

  const colors = [
    { name: "Beige", count: 1, hex: "#F3F2DA" },
    { name: "Black", count: 1, hex: "#000000" },
    { name: "Blue", count: 1, hex: "#0000FF" },
    { name: "Bronze", count: 1, hex: "#D4AF37" },
    { name: "Brown", count: 1, hex: "#8B4513" },
    { name: "Gold", count: 1, hex: "#FFD700" },
    { name: "Gray", count: 1, hex: "#808080" },
    { name: "Green", count: 1, hex: "#228B22" },
    { name: "Orange", count: 1, hex: "#FFA500" },
    { name: "Pink", count: 2, hex: "#FFC0CB" },
    { name: "Purple", count: 2, hex: "#800080" },
    { name: "Red", count: 2, hex: "#FF0000" },
    { name: "Rose gold", count: 1, hex: "#B76E79" },
    { name: "Yellow", count: 1, hex: "#FFFF00" },
  ];

  const sizes = [
    "XXS (26)",
    "XS (29)",
    "S (29)",
    "s (1)",
    "M (29)",
    "m (1)",
    "L (29)",
    "l (1)",
    "XL (29)",
    "xl (1)",
    "XXL (28)",
    "2XL (1)",
    "XXXL (14)",
    "3XL (1)",
    "4XL (1)",
    "x (1)",
  ];

  const drawerElement = (
    <>
      <div
        className={`${styles.drawerOverlay} ${styles.overlayVisible}`}
        onClick={onClose}
      />
      <div className={`${styles.drawerContainer} ${styles.drawerOpen}`}>
        <div className={styles.drawerHeader}>
          <span className={styles.filterCountText}>
            Filter and Sort | 33 products
          </span>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.drawerContent}>
          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>Category</h5>
            <hr className={styles.divider} />
            <div className={styles.optionsGrid}>
              {categories.map((cat, i) => (
                <label key={i} className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.hiddenCheckbox} />
                  <span className={styles.customCheckbox}>
                    <span className={styles.pillCircle} />
                    {cat.name} ({cat.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>Product type</h5>
            <hr className={styles.divider} />
            <div className={styles.optionsGrid}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.hiddenCheckbox} />
                <span className={styles.customCheckbox}>
                  <span className={styles.pillCircle} />
                  Jersey (2)
                </span>
              </label>
            </div>
          </div>

          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>Color</h5>
            <hr className={styles.divider} />
            <div className={styles.optionsGrid}>
              {colors.map((color, i) => (
                <label key={i} className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.hiddenCheckbox} />
                  <span className={styles.customCheckbox}>
                    <span
                      className={styles.colorDot}
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.name} ({color.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>SIZE</h5>
            <hr className={styles.divider} />

            <div className={styles.sizeGrid}>
              {sizes.map((size, i) => (
                <label key={i} className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.hiddenCheckbox} />
                  <span className={styles.customCheckbox}>
                    <span className={styles.pillCircle} />
                    {size}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.drawerFooter}>
          <button className={styles.removeAlButton}>REMOVE ALL</button>
          <button className={styles.applyButton}>APPLY</button>
        </div>
      </div>
    </>
  );

  return createPortal.createPortal(drawerElement, document.body);
};

export default AdvanceFilter;
