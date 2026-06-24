import Footer from "../Main/Footer";
import styles from "./ReturnsPolicy.module.css";

const ReturnsPolicy = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Returns & Cancellation Policy</h1>

        <p className={styles.introText}>
          <span> Effective Date: April 10, 2025</span> <br />
          At LAJ Lifestyle Private Limited, your satisfaction is our top
          priority. We strive to provide high-quality products and a seamless
          shopping experience. If for any reason you are not fully satisfied
          with your purchase, we offer support through exchanges, store credits,
          and defined cancellation and refund policies as detailed below.
        </p>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>CANCELLATION POLICY</h2>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>1. Order Cancellations:</h3>
            <p className={styles.text}>
              You may request a cancellation only if your order has not been
              shipped. To request a cancellation, please contact us via the
              Contact Us page.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>2. Exceptions to Cancellations:</h3>
            <p className={styles.text}>
              Orders that have already been shipped are not eligible for
              cancellation.
            </p>
            <p className={styles.text}>No cancellations are accepted on:</p>
            <ul className={styles.list}>
              <li>Discounted or promotional merchandise</li>
              <li>Pre-orders</li>
              <li>International orders</li>
            </ul>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>RETURN POLICY</h2>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>1. Refunds for Returned Orders:</h3>
            <p className={styles.text}>
              Approved returns will be refunded in the form of store credit,
              valid for 12 months from the date of issue.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>
              2. Refunds for Cancelled Orders:
            </h3>
            <p className={styles.text}>
              If your order is successfully cancelled before shipping, the
              payment will be refunded to the original method of payment.
            </p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>3. Refund Restrictions:</h3>
            <ul className={styles.list}>
              <li>
                No return, refund, or cancellation is applicable on Customized
                Items.
              </li>
              <li>
                International orders and customized products are not eligible
                for returns, exchanges, or refunds.
              </li>
              <li>Pre-orders are not eligible for cancellation or refund.</li>
            </ul>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Returns:</h3>
            <p className={styles.text}>
              Returns/Exchange are only accepted within 15 days of delivery.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnsPolicy;
