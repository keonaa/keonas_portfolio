import styles from "./HarmonyCarousel.module.css";

export default function HarmonyCarousel() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          <img src="/images/postPresentation.png" alt="Harmony Group Photo" className={styles.label} />
          <img src="/images/showcaseTable.png" alt="Label 3" className={styles.label} />
          <img src="/images/teamPresenting_upscaled.jpg" alt="Label 3" className={styles.label} />

          <img src="/images/postPresentation.png" alt="Harmony Group Photo" className={styles.label} />
          <img src="/images/showcaseTable.png" alt="Label 3" className={styles.label} />
          <img src="/images/teamPresenting_upscaled.jpg" alt="Label 3" className={styles.label} />
        </div>
      </div>
    </div>
  );
}
