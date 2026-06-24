import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          SIX5IX LEGER COLLECTION LIVE! SHOP NOW
        </div>
        <button className={styles.closeButton} aria-label="Close">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.menu}>
        <ul>
          <li>
            <img src="img/Group 287.svg" alt="Home" />
          </li>
          <li>
            <img src="img/Group 4.svg" alt="User" />
          </li>
          <li className={styles.menuText}>MENU</li>
          <li>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: "block" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </li>
          <li>
            <div className={styles.bagContainer}>
              <div className={styles.bagHandle}></div>
              <div className={styles.bagBody}>
                <img
                  src="img/Group 181.svg"
                  alt="Pattern"
                  className={styles.patternImg}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
