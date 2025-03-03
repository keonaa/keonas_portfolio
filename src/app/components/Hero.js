import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hey! I&apos;m Keona</h1>
      <p>A MULTIDISCIPLINARY DIGITAL DESIGNER, SPECIALIZING IN UX/UI DESIGN.</p>
      
      <div className={styles.chipsContainer}>
        <span className={styles.chip}>UX/UI DESIGNER</span>
        <span className={styles.chip}>GRAPHIC DESIGN</span>
        <span className={styles.chip}>VIDEO EDITOR</span>
        <span className={styles.chip}>STORYTELLER</span>
      </div>

      <div className={styles.scrollContainer}>
        <p className={styles.scrollText}>SCROLL</p>
        <Image 
          src="/scroll_arrow.svg"
          alt="Scroll Arrow"
          width={30}
          height={30} 
          className={styles.scrollArrow} 
        />
      </div>
    </section>
  );
}
