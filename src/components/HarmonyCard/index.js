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
            An AI-powered caregiving app designed to support caregivers by simplifying tasks, scheduling, and team collaboration
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/harmony_phoneMockup.png"
            alt="Harmony App"
            width={250}
            height={320}
            className={styles.phoneImage}
          />
        </div>
      </Link>
    </div>
  );
}
