import Footer from "../Main/Footer";
import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>OUR STORY</h1>
        </header>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            We started in 2018 to make gear that functions between performance
            and culture. We do not make standard sportswear or generic
            streetwear. We create clothing that performs on the field and fits
            into everyday life.
          </p>

          <p className={styles.paragraph}>
            SIX5SIX is an Indian brand. We design and manufacture official kits
            for the Kolkata Knight Riders, the Indian National Football Team,
            and multiple Indian Super League clubs. We also supply gear to
            hundreds of local academies and grassroots clubs.
          </p>

          <p className={styles.paragraph}>
            Our streetwear and activewear lines carry that same athletic utility
            to the street. We design for athletes, creators, fans, and anyone
            who values functional design.
          </p>

          <p className={styles.paragraph}>
            We build every piece with focus on utility, sport, and style.
          </p>
          <p className={styles.tagline}>
            This is where sport meets culture. This is SIX5SIX.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
