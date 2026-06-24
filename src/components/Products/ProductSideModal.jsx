import { useState } from "react";
import styles from "./ProductSideModal.module.css";

const ProductSideModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("2XL");
  const [jerseyNumber, setJerseyNumber] = useState("");
  const [jerseyName, setJerseyName] = useState("");

  if (!product) return null;

  const sizes = ["2XL", "XL", "L", "M", "S", "XS", "3XL", "4XL"];

  const parsePrice = (priceValue) => {
    if (!priceValue) return 1900;
    if (typeof priceValue === "number") return priceValue;
    let priceStr = priceValue.toString().trim();
    if (priceStr.endsWith(".00")) {
      priceStr = priceStr.slice(0, -3);
    }
    const numericValue = priceStr.replace(/[^0-9]/g, "");
    return parseInt(numericValue, 10) || 1900;
  };

  const basePrice = parsePrice(product.discountedPrice);
  const personalizationCost = 125;

  const numberCost = jerseyNumber.trim().length > 0 ? personalizationCost : 0;
  const nameCost = jerseyName.trim().length > 0 ? personalizationCost : 0;
  const totalPrice = basePrice + numberCost + nameCost;

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setJerseyNumber(value);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[a-zA-Z\s]+$/.test(value)) {
      setJerseyName(value);
    }
  };

  const handleAddToCartClick = () => {
    if (onAddToCart) {
      onAddToCart({
        id: product.id || product._id,
        title: product.title,
        image: product.image,
        price: totalPrice,
        size: selectedSize,
        customName: jerseyName.trim(),
        customNumber: jerseyNumber.trim(),
      });
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerRow}>
          <div className={styles.badgeGroup}>
            <span className={styles.discountBadge}>
              {product.discount || "20% OFF"}
            </span>
            <span className={styles.seasonBadge}>
              {product.season || "2025-26"}
            </span>
          </div>
          <div className={styles.ratingBox}>
            <div className={styles.ratingLeft}>
              <img
                src="/img/rating1.svg"
                alt=""
                className={styles.wreathIcon}
              />
              <span className={styles.ratingText}>
                {product.rating || "4.5"}
              </span>
              <img
                src="/img/rating2.svg"
                alt=""
                className={styles.wreathIcon}
              />
            </div>
            <div className={styles.ratingRight}>
              <span className={styles.ratingCountValue}>25.8k</span>
              <span className={styles.ratingLabel}>Ratings</span>
            </div>
          </div>
        </div>

        <h1 className={styles.title}>{product.title}</h1>

        <div className={styles.priceRow}>
          {product.originalPrice && (
            <span className={styles.oldPrice}>{product.originalPrice}</span>
          )}
          <span className={styles.currentPrice}>
            Rs. {basePrice.toLocaleString()}.00
          </span>
        </div>

        <div className={styles.personalizationBox}>
          <span className={styles.personalizeTag}>Personalize your Jersey</span>
          <p className={styles.personalizeDesc}>
            Customize with your name or number to make it uniquely yours.
          </p>
          <p className={styles.personalizePrice}>
            Personalization available at just Rs. 125 each.
          </p>

          <div className={styles.inputRow}>
            <fieldset
              className={`${styles.customFieldset} ${styles.inputGroupSmall}`}
            >
              <legend className={styles.customLegend}>000</legend>
              <div className={styles.fieldsetInner}>
                <input
                  type="text"
                  maxLength="3"
                  value={jerseyNumber}
                  onChange={handleNumberChange}
                />
                <span className={styles.charCount}>
                  {jerseyNumber.length}/3
                </span>
              </div>
            </fieldset>

            <fieldset
              className={`${styles.customFieldset} ${styles.inputGroupLarge}`}
            >
              <legend className={styles.customLegend}>Name</legend>
              <div className={styles.fieldsetInner}>
                <input
                  type="text"
                  maxLength="15"
                  value={jerseyName}
                  onChange={handleNameChange}
                />
                <span className={styles.charCount}>{jerseyName.length}/15</span>
              </div>
            </fieldset>
          </div>

          {(numberCost > 0 || nameCost > 0) && (
            <div className={styles.priceCalculationRow}>
              <span>Rs. {basePrice.toLocaleString()}</span>
              {numberCost > 0 && (
                <>
                  <span className={styles.operator}>+</span>
                  <span>Rs. {numberCost}</span>
                </>
              )}
              {nameCost > 0 && (
                <>
                  <span className={styles.operator}>+</span>
                  <span>Rs. {nameCost}</span>
                </>
              )}
              <span className={styles.operator}>=</span>
              <span className={styles.totalCalculatedPrice}>
                Rs. {totalPrice.toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <div className={styles.sizeSection}>
          <div className={styles.sizeHeader}>
            <span className={styles.trueToSize}>True to Size</span>
            <button className={styles.sizeGuideBtn}>What's my fit ?</button>
          </div>
          <div className={styles.sizeGrid}>
            {sizes.map((size) => (
              <button
                key={size}
                className={`${styles.sizeBtn} ${
                  selectedSize === size ? styles.sizeBtnActive : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.actionRow}>
          <button
            className={styles.addToCartBtn}
            onClick={handleAddToCartClick}
          >
            Add to cart
          </button>
          <button className={styles.buyNowBtn}>Buy it now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSideModal;
