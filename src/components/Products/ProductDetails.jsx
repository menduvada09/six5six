import { useState } from "react";
import styles from "./ProductDetails.module.css";
import Footer from "../Main/Footer";
import YouMayAlsoLike from "./YouMayAlsoLike";
import Toast from "../Main/Toast";

const ProductDetail = ({ onAddToCart, setWishlistItems }) => {
  const [selectedSize, setSelectedSize] = useState("2XL");
  const [activeTab, setActiveTab] = useState("details");
  const [jerseyNumber, setJerseyNumber] = useState("");
  const [jerseyName, setJerseyName] = useState("");
  const [showToast, setShowToast] = useState(false);

  const sizes = ["2XL", "XL", "L", "M", "S", "XS", "3XL", "4XL"];

  const scrollImages = [
    "https://six5six2025.myshopify.com/cdn/shop/files/2025_Feb28_Six5Six_day1-0023copyLarge.webp?v=1772194685&width=1946",
    "https://six5six2025.myshopify.com/cdn/shop/files/2025_Feb28_Six5Six_day1-0075copyLarge.webp?v=1772194685&width=1946",
    "https://six5six2025.myshopify.com/cdn/shop/files/2025_Feb28_Six5Six_day1-0070copyLarge.webp?v=1772194685&width=1946",
  ];

  const basePrice = 1900;
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
    const productData = {
      id: "kkr-black-knight-tee",
      title: "KKR Black Knight Tee",
      price: totalPrice,
      size: selectedSize,
      image: scrollImages[0],
      customNumber: jerseyNumber.trim() || null,
      customName: jerseyName.trim() || null,
    };
    if (onAddToCart) {
      onAddToCart(productData);
    }
  };

  const handleWishlistClick = () => {
    const formattedPrice = `Rs. ${totalPrice.toLocaleString()}.00`;
    const productData = {
      id: "kkr-black-knight-tee",
      title: "KKR Black Knight Tee",
      size: selectedSize,
      price: totalPrice,
      currentPrice: formattedPrice,
      image: scrollImages[0],
      wishlistId: `kkr-black-knight-tee-${selectedSize}-${Date.now()}`,
      customNumber: jerseyNumber.trim() || null,
      customName: jerseyName.trim() || null,
    };

    if (setWishlistItems) {
      setWishlistItems((prevItems) => {
        const isAlreadyInWishlist = prevItems.some(
          (item) => item.id === productData.id && item.size === productData.size
        );
        if (isAlreadyInWishlist) {
          return prevItems;
        }
        return [...prevItems, productData];
      });
    }
    setShowToast(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.modelInfo}>
              <div className={styles.infoGroup}>
                <span className={styles.infoLabel}>Model Height</span>
                <span className={styles.infoValue}>5'9</span>
              </div>
              <div className={styles.infoGroup}>
                <span className={styles.infoLabel}>Model Wears</span>
                <span className={styles.infoValue}>Large</span>
              </div>
            </div>
            <div className={styles.videoWrapper}>
              <video
                loop
                muted
                playsInline
                autoPlay
                className={styles.productVideo}
              >
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/5f872666ea104bdb9ebae0f01e61f505.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.scrollContainer}>
              {scrollImages.map((img, index) => (
                <div className={styles.productImages} key={index}>
                  <img
                    src={img}
                    alt={`KKR Black Knight Tee View ${index + 1}`}
                    className={styles.productImg}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.headerRow}>
              <div className={styles.badgeGroup}>
                <span className={styles.discountBadge}>20% OFF</span>
                <span className={styles.seasonBadge}>2025-26</span>
                <button
                  className={styles.bookmarkBtn}
                  aria-label="Save item"
                  onClick={handleWishlistClick}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="23"
                    height="23"
                  >
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                  </svg>
                </button>
              </div>
              <div className={styles.ratingBox}>
                <div className={styles.ratingLeft}>
                  <img
                    src="/img/rating1.svg"
                    alt=""
                    className={styles.wreathIcon}
                  />
                  <span className={styles.ratingText}>4.5</span>
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

            <h1 className={styles.title}>KKR Black Knight Tee</h1>
            <div className={styles.priceRow}>
              <span className={styles.oldPrice}>Rs. 2,400.00</span>
              <span className={styles.currentPrice}>
                Rs. {basePrice.toLocaleString()}.00
              </span>
            </div>

            <div className={styles.personalizationBox}>
              <span className={styles.personalizeTag}>
                Personalize your Jersey
              </span>
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
                    <span className={styles.charCount}>
                      {jerseyName.length}/15
                    </span>
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

            <div className={styles.tabsContainer}>
              <div className={styles.tabsHeader}>
                <button
                  className={`${styles.tabLink} ${
                    activeTab === "details" ? styles.tabLinkActive : ""
                  }`}
                  onClick={() => setActiveTab("details")}
                >
                  Details & Description
                </button>
                <button
                  className={`${styles.tabLink} ${
                    activeTab === "washcare" ? styles.tabLinkActive : ""
                  }`}
                  onClick={() => setActiveTab("washcare")}
                >
                  Washcare
                </button>
                <button
                  className={`${styles.tabLink} ${
                    activeTab === "shipping" ? styles.tabLinkActive : ""
                  }`}
                  onClick={() => setActiveTab("shipping")}
                >
                  Shipping
                </button>
              </div>

              <div className={styles.tabContent}>
                {activeTab === "details" && (
                  <div>
                    <div className={styles.tagRow}>
                      <span className={styles.infoTag}>100% polyster</span>
                      <span className={styles.infoTag}>240 gsm</span>
                      <span className={styles.infoTag}>Puff prints</span>
                    </div>
                    <div className={styles.descriptionText}>
                      <p>
                        A tribute to Emirati heritage, blending traditional
                        textiles, Islamic architecture, and decorative arts into
                        a refined geometric tapestry. Within the print, the
                        letters “ADKR” are subtly stylized like Arabic
                        calligraphy written in English, to merge cultural
                        respect with modern identity.
                      </p>
                      <p>
                        Gold-printed side strips extend the core pattern, while
                        the collar and sleeve cuffs feature intricate geometric
                        detailing. Gold piping along the seams adds a sleek,
                        regal touch. This design celebrates legacy and pride,
                        carrying the spirit of the region into every match.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "washcare" && (
                  <ul className={styles.descriptionText1}>
                    <li> Wash Care-Handwash Only.</li>
                    <li> Neckline- Comfortable ribbed neck patti</li>
                    <li> 3d Team logo on the Front</li>
                    <li> Country of Production: India</li>
                  </ul>
                )}
                {activeTab === "shipping" && (
                  <ul className={styles.descriptionText1}>
                    <li> Free delivery across India.</li>
                    <li>
                      This is a Pre-Order and will be dispatched in 2 weeks.
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <YouMayAlsoLike /> */}
      <YouMayAlsoLike onAddToCart={onAddToCart} />
      <Footer />
      <Toast
        productImage={scrollImages[0]}
        productName="KKR Black Knight Tee"
        show={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
      />
    </>
  );
};

export default ProductDetail;
