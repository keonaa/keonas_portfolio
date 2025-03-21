import styles from "./FizzleCarousel.module.css";

export default function FizzleCarousel() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          <img src="/images/cherry_dieline.png" alt="Label 1" className={styles.label} />
          <img src="/images/blueberry_dieline.png" alt="Label 2" className={styles.label} />
          <img src="/images/orange_dieline.png" alt="Label 3" className={styles.label} />

          <img src="/images/cherry_dieline.png" alt="Label 1" className={styles.label} />
          <img src="/images/blueberry_dieline.png" alt="Label 2" className={styles.label} />
          <img src="/images/orange_dieline.png" alt="Label 3" className={styles.label} />
        </div>
      </div>
    </div>
  );
}
