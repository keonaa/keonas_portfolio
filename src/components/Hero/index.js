import styles from "./hero.module.css";
import Image from "next/image";
import Chips from "../Chips";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hey! I&apos;m Keona</h1>
      <p>A MULTIDISCIPLINARY DIGITAL DESIGNER, SPECIALIZING IN UX/UI DESIGN.</p>
      
      <div className={styles.chipsContainer}>
        <Chips items={["UX/UI DESIGNER", "GRAPHIC DESIGN", "VIDEO EDITOR", "STORYTELLER"]} />
      </div>

      <div className={styles.scrollContainer}>
        <p className={styles.scrollText}>SCROLL</p>
        <Image 
          src="/images/scroll_arrow.svg"
          alt="Scroll Arrow"
          width={30}
          height={30} 
          className={styles.scrollArrow} 
        />
      </div>
    </section>
  );
}
