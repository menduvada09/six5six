import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import Search from "./Search";
import OrangeModal from "./OrangeModal";

export default function Navbar({ onCartClick, cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBottomLinksOpen, setIsBottomLinksOpen] = useState(false);
  const [isOrangeOpen, setIsOrangeOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleBottomLinks = () => {
    setIsBottomLinksOpen(!isBottomLinksOpen);
  };

  return (
    <>
      <div className={styles.announceBarMain}>
        <div className={styles.fadeScrollContainer}>
          <div className={styles.scrollingText}>
            <div>
              WORLDWIDE SHIPPING | <span>&copy;</span> SIX5IX
            </div>
            <div>SIX5IX LÉGER COLLECTION LIVE! SHOP NOW!</div>
            <div>
              WORLDWIDE SHIPPING | <span>&copy;</span> SIX5IX
            </div>
            <div>SIX5IX LÉGER COLLECTION LIVE! SHOP NOW!</div>
          </div>
          <div className={styles.scrollingText} aria-hidden="true">
            <div>
              WORLDWIDE SHIPPING | <span>&copy;</span> SIX5IX
            </div>
            <div>SIX5IX LÉGER COLLECTION LIVE! SHOP NOW!</div>
            <div>
              WORLDWIDE SHIPPING | <span>&copy;</span> SIX5IX
            </div>
            <div>SIX5IX LÉGER COLLECTION LIVE! SHOP NOW!</div>
          </div>
        </div>

        <div className={styles.orangeDiscountBar}>
          <span className={styles.discountText}>
            40% OFF ON THE WHOLE STORE
          </span>
          <span className={styles.subscribeText}>SUBSCRIBE TO GET OFFER</span>
        </div>
      </div>

      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/img/logo.svg" alt="Logo" className={styles.logoImg} />
            </Link>
          </div>

          <button
            onClick={toggleBottomLinks}
            className={styles.mobileMenuTriggerText}
          >
            MENU
          </button>

          <ul className={styles.links}>
            <li>
              <Link to="/new-in">NEW IN</Link>
            </li>
            <li>
              <Link to="/men">MEN</Link>
            </li>
            <li>
              <a href="#women">WOMEN</a>
            </li>
            <li>
              <a href="#sports">SPORTS</a>
            </li>
            <li>
              <a href="#drops">LIMITED DROPS</a>
            </li>
            <li>
              <a href="#sale" className={styles.sale}>
                SALE
              </a>
            </li>
          </ul>

          <div className={styles.actions}>
            <button
              className={styles.orangeCircle}
              onClick={() => setIsOrangeOpen(true)}
            >
              <img src="/img/group.svg" alt="Orange Profile" />
            </button>

            <Link
              to="/wishlist"
              className={styles.bookmarkWrapper}
              aria-label="Go to Wishlist"
            >
              <div className={styles.bookmarkIcon}></div>
            </Link>

            <button
              className={styles.btn}
              onClick={toggleSearch}
              aria-label="Open Search"
            >
              <img src="/img/search.svg" alt="Search" />
            </button>

            <Link
              to="/login"
              className={styles.btn}
              aria-label="Profile Login"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="1.38vw"
                height="1.38vw"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              className={styles.btn}
              onClick={onCartClick}
              aria-label="Open Cart"
              style={{ position: "relative" }}
            >
              <img src="/img/bag.svg" alt="Shopping Bag" />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-0.3vw",
                    right: "-0.2vw",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    padding: "0.05vw 0.2vw",
                    fontSize: "0.6vw",
                    fontWeight: "bold",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`${styles.overlay} ${
          isBottomLinksOpen ? styles.overlayVisible : ""
        }`}
        onClick={toggleBottomLinks}
      ></div>

      <div
        className={`${styles.mobileMenu} ${
          isBottomLinksOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileMenuHeader}>
          <span>CATEGORIES</span>
          <button className={styles.closeBtn} onClick={toggleBottomLinks}>
            ✕
          </button>
        </div>
        <ul className={styles.mobileMenuList}>
          <li>
            <Link to="/new-in" onClick={toggleBottomLinks}>
              NEW IN
            </Link>
          </li>
          <li>
            <Link to="/men" onClick={toggleBottomLinks}>
              MEN
            </Link>
          </li>
          <li>
            <a href="#women" onClick={toggleBottomLinks}>
              WOMEN
            </a>
          </li>
          <li>
            <a href="#sports" onClick={toggleBottomLinks}>
              SPORTS
            </a>
          </li>
          <li>
            <a href="#drops" onClick={toggleBottomLinks}>
              LIMITED DROPS
            </a>
          </li>
          <li>
            <a
              href="#sale"
              className={styles.saleMobile}
              onClick={toggleBottomLinks}
            >
              SALE
            </a>
          </li>
        </ul>
      </div>

      <ToggleMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <Search isOpen={isSearchOpen} onClose={toggleSearch} />
      <OrangeModal
        isOpen={isOrangeOpen}
        onClose={() => setIsOrangeOpen(false)}
      />
    </>
  );
}
