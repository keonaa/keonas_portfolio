"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/">
          <Image
            src="/images/keona_logo.svg"
            alt="Keona Logo"
            className={styles.logo}
            width={100} 
            height={40} 
          />
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/project">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
