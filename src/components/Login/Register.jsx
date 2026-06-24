import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import Footer from "../Main/Footer";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted", {
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <>
      <div className={styles.pageWrapper}>
        <h1 className={styles.registerHeading}>Create Account</h1>

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

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

          <button className={styles.registerSubmitBtn} type="submit">
            Create
          </button>

          <div className={styles.loginRow}>
            <Link to="/login" className={styles.inlineLink}>
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
