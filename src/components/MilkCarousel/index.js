import styles from "./MilkCarousel.module.css";

export default function MilkCarousel() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          <img src="/images/milkCarton.png" alt="Label 1" className={styles.label} />
          <img src="/images/earth.png" alt="Label 2" className={styles.label} />
          <img src="/images/cow.png" alt="Label 3" className={styles.label} />
          <img src="/images/forrest.png" alt="Label 4" className={styles.label} />

          <img src="/images/milkCarton.png" alt="Label 1" className={styles.label} />
          <img src="/images/earth.png" alt="Label 2" className={styles.label} />
          <img src="/images/cow.png" alt="Label 3" className={styles.label} />
          <img src="/images/forrest.png" alt="Label 4" className={styles.label} />
        </div>
      </div>
    </div>
  );
}
