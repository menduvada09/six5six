import { useState } from "react";
import styles from "./Blogs.module.css";
import Footer from "../Main/Footer";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className={styles.container}>
        {currentPage === 1 && (
          <>
            <div className={styles.first}>
              <img
                src="//six5six2025.myshopify.com/cdn/shop/articles/FCG-656_0cac71cb-b299-42f7-b32f-4ebf6cfad72e.webp?v=1772792706&amp"
                alt=""
                className={styles.firstImage}
              />
              <p>
                FC Goa x SIX5SIX: FC Goa are delighted to announce SIX5SIX as
                their new Official Kit Partner for the upcoming 2023-24 season
                and beyond. The partnership between FC Goa and SIX5SIX, one...
              </p>
            </div>
            <div className={styles.second}>
              <div className={styles.left}>
                <img
                  src="//six5six2025.myshopify.com/cdn/shop/articles/HIC-BLOG-BANNER.webp?v=1772792869&amp;"
                  alt=""
                />
                <p>
                  India is set to host the Hero Intercontinational Cup 2023 in
                  Bhubaneswar after 3 years. get 20% flate discount on Team
                  India Kits.
                </p>
              </div>
              <div className={styles.right}>
                <img
                  src="//six5six2025.myshopify.com/cdn/shop/articles/BLOG.webp?v=1772796168&amp;"
                  alt=""
                />
                <p>
                  Indian Women's League 2023: The Hero Indian Women's League
                  schedule has been announced, with the tournament commencing on
                  April 26th, just one day after the current Super Cup 2023
                  concludes. All you...
                </p>
              </div>
            </div>
            <div className={styles.third}>
              <img
                src="//six5six2025.myshopify.com/cdn/shop/articles/Hero_Super_Cup._-_BLOG.webp?v=1772796864&amp;"
                alt=""
                className={styles.firstImage}
              />
              <p>
                Hero Super Cup LIVE: After a four-year hiatus, the Super Cup is
                making a comeback. Kerala Blasters, North East United FC, and
                TRAU FC all fight for glory in the Super Cup,...
              </p>
            </div>
            <div className={styles.fourth}>
              <div className={styles.left}>
                <img
                  src="//six5six2025.myshopify.com/cdn/shop/articles/a.webp?v=1772777604&amp;"
                  alt=""
                />
                <p>
                  AFC Women’s Olympic Qualifiers LIVE: The Indian Women's
                  Football Team, coached by Thomas Dennerby, is currently in
                  Bishkek practicing for their AFC Women's Olympic Qualifiers
                  Round 1 match against Kyrgyz Republic...
                </p>
              </div>
              <div className={styles.right}>
                <img
                  src="//six5six2025.myshopify.com/cdn/shop/articles/AIFF-Story-Banner_0b736dac-1ecb-4a8e-872b-84784eb59774.webp?v=1772792100&amp;"
                  alt=""
                />
                <p>
                  Being dubbed as the 'Blue Tigers' for the past 3 years, the
                  Indian Football Team had tiger stripes as their identity.
                  While the main idea was to stick with the...
                </p>
              </div>
            </div>
          </>
        )}

        {/* Page 2 Content */}
        {currentPage === 2 && (
          <>
            <div className={styles.first}>
              <img
                src="//six5six2025.myshopify.com/cdn/shop/articles/aiff_banner.webp?v=1772777921&amp;"
                alt=""
                className={styles.firstImage}
              />
              <p>
                Hero Tri Series LIVE: India to face Myanmar
                &amp;&nbsp;Krygyzstan during International break as they aim to
                up their FIFA Rankings. TICKETS, LIVE STREAMING, Get FLAT 20%
                OFF ON INDIAN KITS.
              </p>
            </div>
            <div className={styles.second}>
              <div className={styles.left}>
                <img
                  src="//six5six2025.myshopify.com/cdn/shop/articles/SHE_KICKS_-_Banner.webp?v=1772777892&amp;"
                  alt=""
                />
                <p>
                  She Kicks x SIX5SIX:&nbsp;Having been working towards female
                  representation in football, building a women centric and women
                  driven sporting professional community, She Kicks and SIX5SIX
                  Sport have walked hand-in-hand. With...
                </p>
              </div>
              <div className={styles.right}>
                <img
                  src="//six5six2025.myshopify.com/cdn/shop/articles/KBFC-3-Desktop-Banner.webp?v=1772777858&amp;"
                  alt=""
                />
                <p>
                  There’s no place quite as vibrant as Kerala, where celebration
                  is a way of life. Whether it’s festivals or football, the way
                  that the locals worship/celebrate both is something we...
                </p>
              </div>
            </div>
            <div className={styles.third}>
              <img
                src="//six5six2025.myshopify.com/cdn/shop/articles/jhejf7ke6f3uea9yxppu_a4eadda8-75fc-4553-9fc7-d0b8501fbee0.jpg?v=1772777830&amp;"
                alt=""
                className={styles.firstImage}
              />
              <p>
                Get to know your Young Tigresses, Squad, Fixtures, Schedule, and
                More as they make their debut in the FIFA U17 Women's World Cup.
              </p>
            </div>
          </>
        )}

        {/* Pagination Control Section */}
        <div className={styles.pagination}>
          {currentPage === 2 && (
            <button className={styles.arrow} onClick={() => setCurrentPage(1)}>
              &lt;
            </button>
          )}

          <button
            className={`${styles.pageNumber} ${
              currentPage === 1 ? styles.activePage : ""
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>

          <button
            className={`${styles.pageNumber} ${
              currentPage === 2 ? styles.activePage : ""
            }`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>

          {currentPage === 1 && (
            <button className={styles.arrow} onClick={() => setCurrentPage(2)}>
              &gt;
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
