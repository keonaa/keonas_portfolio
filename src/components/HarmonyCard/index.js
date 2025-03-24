"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./harmonyCard.module.css";

export default function HarmonyCard() {
  return (
    <div className={styles.wrapper}>
      <Link href="/harmony" className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>Harmony</h2>
          <p className={styles.description}>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/fizzle_cans.png"
            alt="Harmony App"
            width={350}
            height={420}
            className={styles.fizzleImage}
          />
        </div>
      </Link>
    </div>
  );
}
