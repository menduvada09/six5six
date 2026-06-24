import styles from "./WomenBanner.module.css";

export default function WomenBanner() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.bannerContainer}>
          <img
            src="//six5six2025.myshopify.com/cdn/shop/files/656-Active-Cover-Updated.jpg?v=1772101388&amp;width=2000"
            className={styles.backgroundImage}
            alt="Woman's Exclusive Banner"
          />

          <div className={styles.contentOverlay}>
            <span className={styles.subheading}>New Items Live Now</span>
            <h1 className={styles.heading}>Woman's Exclusive</h1>

            <div className={styles.buttonGroup}>
              <a href="/shop-now" className={styles.btnFilled}>
                Shop Now
              </a>
              <a href="/womens-exclusive" className={styles.btnOutline}>
                Woman's Exclusive
              </a>
            </div>
          </div>
        </section>
        <section className={styles.bannerContainer}>
          <img
            src="https://media.istockphoto.com/id/1307568521/photo/its-the-denim-that-does-it-for-me.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=0RQfpn8VJxXl6sO4aUehTsPvyYKGPwVwz1EdJRBU_Nw="
            className={styles.backgroundImage}
            alt="Bottom wear Banner"
          />

          <div className={styles.contentOverlay}>
            <span className={styles.subheading}>New Items Live Now</span>
            <h1 className={styles.heading}>Bottomwear</h1>

            <div className={styles.buttonGroup}>
              <a href="/shop-now" className={styles.btnFilled}>
                Shop Now
              </a>
            </div>
          </div>
        </section>
        <section className={styles.bannerContainer}>
          <img
            src="https://img.magnific.com/free-photo/denimclad-woman-lounging-yellow-chair-near-colorful-steps_24972-2926.jpg?semt=ais_hybrid&w=740&q=80"
            className={styles.backgroundImage}
            alt="Woman's Exclusive Banner"
          />

          <div className={styles.contentOverlay}>
            <span className={styles.subheading}>New Items Live Now</span>
            <h1 className={styles.heading}>Outwear</h1>

            <div className={styles.buttonGroup}>
              <a href="/shop-now" className={styles.btnFilled}>
                Shop Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
