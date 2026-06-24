import { useState } from "react";
import styles from "./Team.module.css";

const FindTeam = () => {
  const [activeTab, setActiveTab] = useState("Cricket");

  const teamData = {
    Cricket: [
      {
        id: "kkr",
        name: "Kolkata Knight Riders",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
      {
        id: "lsg",
        name: "Lucknow Super Giants",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
      {
        id: "pbks1",
        name: "Punjab Kings",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
      {
        id: "pbks2",
        name: "Punjab Kings",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
      {
        id: "pbks3",
        name: "Punjab Kings",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
      {
        id: "pbks4",
        name: "Punjab Kings",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
    ],
    Football: [
      {
        id: "fcg",
        name: "FC Goa",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
      {
        id: "cfc",
        name: "Chennaiyin FC",
        logo: "//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602",
      },
    ],
  };

  return (
    <section className={styles.findTeam}>
      <h2 className={styles.heading}>Find your team</h2>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "Cricket" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("Cricket")}
        >
          <img
            src="/img/Group 196.svg"
            alt="Cricket"
            className={styles.tabIcon}
          />
          Cricket
        </button>

        <button
          className={`${styles.tab} ${
            activeTab === "Football" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("Football")}
        >
          <img
            src="/img/Group 197.svg"
            alt="Football"
            className={styles.tabIcon}
          />
          Football
        </button>
      </div>

      <div className={styles.teamWrapper}>
        {teamData[activeTab].map((team) => (
          <div className={styles.card} key={team.id}>
            <div className={styles.imageBox}>
              <img src={team.logo} alt={team.name} />
            </div>
            <p className={styles.teamName}>{team.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindTeam;
