"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./FizzleCard.module.css";

export default function FizzleCard() {
  return (
    <div className={styles.wrapper}>
      <Link href="/fizzle" className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>Fizzle!</h2>
          <p className={styles.description}>
            A playful sparkling water brand inspired by soda shop nostalgia, featuring flavors like blueberry, cherry, and orange.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Portfolio_harmony_can.png"
            alt="Fizzle Cans"
            width={350}
            height={420}
            className={styles.fizzleImage}
          />
        </div>
      </Link>
    </div>
  );
}
