"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Milk.module.css";

export default function MilkCard() {
  return (
    <div className={styles.wrapper}>
      <Link href="/milk" className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>Which Milk is Best for You?</h2>
          <p className={styles.description}>
            An animated motion graphics video comparing different types of milk,
            presenting nutritional and environmental facts in a fun and engaging way.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/Portfolio_milk.png"
            alt="Which Milk is Best for You?"
            width={547}
            height={468}
            className={styles.milkImage}
          />
        </div>
      </Link>
    </div>
  );
}
