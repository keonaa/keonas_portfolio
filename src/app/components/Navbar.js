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
            src="/keona_logo.svg"
            alt="Keona Logo"
            className={styles.logo}
            width={100} // Default width for fallback
            height={40} // Default height for fallback
          />
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/projects">Projects</Link>
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
