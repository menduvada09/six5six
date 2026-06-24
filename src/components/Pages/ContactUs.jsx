import Footer from "../Main/Footer";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>CONTACT US</h1>
        <p className={styles.subtitle}>
          Got a question? Hit us up. Whether it’s about your order, sizing, a
          collab idea, or you just wanna say hey — we’re here.
        </p>
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}>1. CUSTOMER CARE</h3>
          <p className={styles.text}>
            For processing returns and exchanges:{" "}
            <a href="#" className={styles.link}>
              Click Here
            </a>
          </p>
          <p className={styles.text}>
            For anything related to your orders, returns, or product questions:
          </p>
          <p className={styles.details}>
            <span className={styles.label}>Email:</span> customercare@six5six.in
            <br />
            <span className={styles.label}>WhatsApp:</span> +91 XXXXXXXXXX
          </p>
        </div>
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}>2. GENERAL ENQUIRIES</h3>
          <p className={styles.text}>
            Want to reach out about something else? We're listening.
          </p>
          <p className={styles.details}>
            <span className={styles.label}>Address:</span>
            <br />
            SIX5SIX HQ
            <br />
            B-35, Sector-59, Noida, Uttar Pradesh-201301
          </p>
        </div>
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}>3. BUSINESS QUERIES</h3>
          <p className={styles.text}>
            For bulk orders, dealerships, or anything business-related:
          </p>
          <p className={styles.details}>
            <span className={styles.label}>Email:</span> business@six5six.in
            <br />
            <span className={styles.label}>WhatsApp:</span> +91 XXXXXXXXXX
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
