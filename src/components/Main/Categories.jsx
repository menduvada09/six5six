import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
import bgImage from "../../../public/img/Gradient.png";

const Categories = () => {
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>NEWNESS, REFINED BY PRICE.</h1>
        <p className={styles.subtitle}>
          Performance and lifestyle styles, now at better prices.
        </p>
        <div className={styles.btnGroup}>
          <Link to="/new-in">
            <button
              className={styles.btn}
              onClick={() => console.log("Shop Women's Sale")}
            >
              SHOP WOMEN'S SALE
            </button>
          </Link>
          <Link to="/new-in">
            <button
              className={styles.btn}
              onClick={() => console.log("Shop Men's Sale")}
            >
              SHOP MEN'S SALE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
