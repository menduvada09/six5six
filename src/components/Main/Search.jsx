import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.css";

export default function Search({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 10);

      if (inputRef.current) {
        inputRef.current.focus();
      }

      return () => {
        clearTimeout(timer);
        setIsAnimated(false);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.searchContainer} ${
          isAnimated ? styles.slideDown : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.searchBarWrapper}>
          <div className={styles.searchBox}>
            <div className={styles.inputGroup}>
              <label htmlFor="search-input" className={styles.searchLabel}>
                Search
              </label>
              <input
                ref={inputRef}
                id="search-input"
                type="text"
                placeholder=""
                className={styles.searchInput}
              />
            </div>

            <button className={styles.searchIconBtn} aria-label="Submit Search">
              <svg
                width="1.38vw"
                height="1.38vw"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#7a7a7a"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#7a7a7a"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            className={styles.closeIconBtn}
            onClick={onClose}
            aria-label="Close Search"
          >
            <svg
              width="1.66vw"
              height="1.66vw"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
