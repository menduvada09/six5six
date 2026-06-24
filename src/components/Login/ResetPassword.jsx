import { useState } from "react";
import styles from "./ResetPassword.module.css";
import Footer from "../Main/Footer";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted for email:", email);
  };

  return (
    <>
      <div className={styles.resetContainer}>
        <h1 className={styles.resetHeading}>Reset your password</h1>
        <p className={styles.resetSubtext}>
          We will send you an email to reset your password
        </p>

        <form className={styles.resetForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

          <div className={styles.buttonRow}>
            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
          </div>

          <div className={styles.cancelRow}>
            <a href="/login" className={styles.cancelLink}>
              Cancel
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
