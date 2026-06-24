import { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.viewer}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          <div className={styles.slide}>
            <img
              src="https://six5six2025.myshopify.com/cdn/shop/files/Horizontal_Banner_jpg.jpg?v=1772101388&width=2000"
              alt="banner 1"
              className={styles.img}
              onClick={handleNext}
              onDragStart={(e) => e.preventDefault()}
            />
            <Link to="/new-in">
              {" "}
              <button className={styles.btn}>Buy Now</button>
            </Link>
          </div>

          <div className={styles.slide}>
            <img
              src="https://six5six2025.myshopify.com/cdn/shop/files/656-Active-Cover-Updated.jpg?v=1772101388&width=2000"
              alt="banner 2"
              className={styles.img}
              onClick={handleNext}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>

          <div className={styles.slide}>
            <img
              src="//six5six2025.myshopify.com/cdn/shop/files/Group_34.png?v=1737456176&amp;width=2000"
              alt="banner 3"
              className={styles.img}
              onClick={handleNext}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className={styles.content}>
              <p>New Items Live Now</p>
              <h2>New Arrivals</h2>
              <div className={styles.buttons}>
                <Link to="/new-in">
                  {" "}
                  <button>Shop Now</button>
                </Link>
                <Link to="/new-in">
                  {" "}
                  <button>Women's Exclusive</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dots}>
        <div
          onClick={() => setCurrent(0)}
          className={`${styles.dot} ${current === 0 ? styles.activeDot : ""}`}
        />
        <div
          onClick={() => setCurrent(1)}
          className={`${styles.dot} ${current === 1 ? styles.activeDot : ""}`}
        />
        <div
          onClick={() => setCurrent(2)}
          className={`${styles.dot} ${current === 2 ? styles.activeDot : ""}`}
        />
      </div>
    </div>
  );
}
