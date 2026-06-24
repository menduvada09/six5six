import styles from "./Footer.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleSection = (sectionName) => {
    setActiveSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="/img/name.svg" alt="logo" />
          </div>
          <div className={styles.content}>
            <h2>GET 10% DISCOUNT.</h2>
            <p>
              FROM EARLY ACCESS TO NEW COLLECTIONS TO SPECIAL DISCOUNTS JUST FOR
              OUR SUBSCRIBERS, WE’VE GOT PERKS YOU DON’T WANT TO MISS. SIGN UP
              NOW AND STEP INTO A WORLD WHERE STYLE MEETS COMFORT LIKE NEVER
              BEFORE.
            </p>
            <div className={styles.timeline}>
              <Link to="/new-in">
                <button>SHOP NOW</button>
              </Link>
              <div className={styles.time1}>[INDIA {time}]</div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div
              className={`${styles.start} ${
                activeSection === "about" ? "open" : ""
              }`}
            >
              <p
                className={styles.title}
                onClick={() => toggleSection("about")}
              >
                ABOUT
              </p>
              <ul className={styles.header}>
                <li>
                  <Link to="/our-story" onClick={scrollToTop}>
                    OUR STORY
                  </Link>
                </li>
                <li>CAREER</li>
                <li>
                  <Link to="/policy/privacy-policy" onClick={scrollToTop}>
                    ALL POLICIES
                  </Link>
                </li>
                <Link to="/blogs" onClick={scrollToTop}>
                  BLOGS
                </Link>
              </ul>
            </div>
            <div
              className={`${styles.middle} ${
                activeSection === "support" ? "open" : ""
              }`}
            >
              <p
                className={styles.title}
                onClick={() => toggleSection("support")}
              >
                SUPPORT
              </p>
              <ul className={styles.header}>
                <li>
                  {" "}
                  <Link to="/contact-us" onClick={scrollToTop}>
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link to="/faq" onClick={scrollToTop}>
                    FAQs
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/refund-return" onClick={scrollToTop}>
                    REFUND & RETURN
                  </Link>
                </li>
                <li>TRACK ORDER</li>
              </ul>
            </div>
            <div
              className={`${styles.end} ${
                activeSection === "social" ? "open" : ""
              }`}
            >
              <p
                className={styles.title}
                onClick={() => toggleSection("social")}
              >
                SOCIAL
              </p>
              <ul className={styles.header}>
                <li>
                  <a
                    href="https://www.instagram.com/six5sixstreet/"
                    target="/blank"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/six5sixsport"
                    target="/blank"
                  >
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a href="https://x.com/six5sixsport" target="/blank">
                    TWITTER
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/SIX5SIX" target="/blank">
                    YOUTUBE
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <div
              className={`${styles.first} ${
                activeSection === "teamwear" ? "open" : ""
              }`}
            >
              <p
                className={styles.title}
                onClick={() => toggleSection("teamwear")}
              >
                TEAMWEAR
              </p>
              <ul className={styles.header}>
                <li>TEAM ENQUERY</li>
                <li>SPONSERSHIP SUBMISSION</li>
                <div>
                  <li>WHATSAPP US</li>
                  <span>
                    <button>(MON-FRI 10PM TO 6PM)</button>
                  </span>
                </div>
              </ul>
            </div>
            <div
              className={`${styles.second} ${
                activeSection === "important" ? "open" : ""
              }`}
            >
              <p
                className={styles.title}
                onClick={() => toggleSection("important")}
              >
                IMPORTANT LINKS
              </p>
              <ul className={styles.header}>
                <li>TEAM WEAR</li>
                <li>ACTIVE WEAR</li>
                <li>STREET WEAR</li>
              </ul>
            </div>

            <div className={styles.buttonsContainer}>
              <button className={styles.signUpBtn}>SIGN UP</button>
              <button className={styles.memberBtn}>BECOME A MEMBER</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightBar}>
        <div className={styles.copyLeft}>INDIA©2025,SIX5SIX</div>
        <div className={styles.copyRight}>
          <Link to="/policy/terms-of-purchase" onClick={scrollToTop}>
            TERMS OF PURCHASE
          </Link>
          <Link to="/policy/terms-of-use" onClick={scrollToTop}>
            TERMS OF USE
          </Link>
          <Link to="/policy/privacy-policy" onClick={scrollToTop}>
            PRIVACY POLICY
          </Link>
        </div>
        <div className={styles.time}>[INDIA {time}]</div>
      </div>
    </>
  );
};

export default Footer;
