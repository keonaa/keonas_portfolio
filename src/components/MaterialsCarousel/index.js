import styles from "./MaterialsCarousel.module.css";

export default function MaterialsCarousel() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          <img src="/images/harmony_businessCard.jpg" alt="harmony business card" className={styles.label} />
          <img   src="/images/harmony_brochure.jpg" alt="harmony brocure" className={styles.label} />
          <img  src="/images/harmony_pvc.png" alt="harmony id card" className={styles.label} />

          <img src="/images/harmony_businessCard.jpg" alt="harmony business card" className={styles.label} />
          <img  src="/images/harmony_brochure.jpg" alt="harmony brocure" className={styles.label} />
          <img src="/images/harmony_pvc.png" alt="harmony id card" className={styles.label} />
        </div>
      </div>
    </div>
  );
}
