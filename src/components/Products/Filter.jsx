import { useState } from "react";
import styles from "./ProductList.module.css";
import AdvanceFilter from "./AdvanceFilter";

const Filter = () => {
  const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);
  const teams = [
    "FC GOA",
    "Lucknow Super Giants",
    "six5six2025",
    "Optionize Add-ones",
  ];

  return (
    <>
      <div className={styles.oeFilterBar}>
        <h6 className={styles.filterTitle}>All products</h6>

        <div className={styles.tagList}>
          {teams.map((team, index) => (
            <button key={index} className={styles.tagButton}>
              {team}
            </button>
          ))}
        </div>

        <button
          className={styles.advanceFilterButton}
          onClick={() => setIsAdvanceOpen(true)}
        >
          Advance Filter
        </button>
      </div>

      <AdvanceFilter
        isOpen={isAdvanceOpen}
        onClose={() => setIsAdvanceOpen(false)}
      />
    </>
  );
};

export default Filter;
