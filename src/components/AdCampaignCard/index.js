import Link from "next/link";
import styles from "./AdCampaignCard.module.css";
import Image from "next/image";

export default function AdCampaignCard() {
  return (
    <div className={styles.wrapper}>
      <Link href="../adCampaign" className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>Harmony - Ad Campaign</h2>
          <p className={styles.description}>
            An ad campaign that follows the journey of caregivers, highlighting their challenges
            while showcasing how Harmony provides support and relief.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Porfolio_harmony_ad.png"
            alt="Harmony Ad Campaign"
            width={547}
            height={468}
            className= {styles.screenImage}
          />
        </div>
      </Link>
    </div>
  );
}
