import { useState } from "react";
import styles from "./Login.module.css";
import Footer from "../Main/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { email, password });
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginHeading}>Login</h1>

        <button className={styles.shopPayBtn} type="button">
          Sign in with <span className={styles.shopText}>shop</span>
        </button>

        <div className={styles.divider}>or</div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
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

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

          <div className={styles.forgotPasswordRow}>
            <a href="/forgot-password" className={styles.inlineLink}>
              Forgot your password?
            </a>
          </div>

          <button className={styles.signInSubmitBtn} type="submit">
            Sign in
          </button>

          <div className={styles.createAccountRow}>
            <a href="/register" className={styles.inlineLink}>
              Create account
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
