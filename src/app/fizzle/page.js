import styles from "./fizzle.module.css";
import Image from "next/image";
import FizzleCarousel from "../components/FizzleCarousel";


export default function Fizzle() {
  return (
    <section className={styles.fizzlePage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h2 className={styles.title}>Fizzle!</h2>
        <div className={styles.tags}>
          <span className={styles.tag}>Graphic Design</span>
          <span className={styles.tag}>Branding</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className={styles.heroImage}>
        <Image
          src="/fizzle_banner.png"
          alt="Fizzle Cans"
          width={1200}
          height={430}
          className={styles.featuredImage}
        />
      </div>

      {/* About Section */}
        <div className={styles.aboutContainer}>
            <h3 className={styles.aboutTitle}>About</h3>
            <div className={styles.aboutContent}>
                <div className={styles.aboutDetails}>
                    <div className={styles.detailBlock}>
                        <h3 className={styles.detailHeading}>Timeline</h3>
                        <p className={styles.detailText}>2 WEEKS | NOV. 2024</p>
                    </div>
                    <div className={styles.detailBlock}>
                        <h3 className={styles.detailHeading}>Tools</h3>
                        <p className={styles.detailText}>PHOTOSHOP</p>
                        <p className={styles.detailText}>ILLUSTRATOR</p>
                    </div>
                </div>

                <div className={styles.aboutText}>
                    <p>Fizzle! is a bold and vibrant carbonated water brand crafted to capture the excitement of carefree moments. Designed to evoke joy and nostalgia, Fizzle! features flavors like blueberry, cherry, and orange, with each sip delivering a crisp, bubbly experience reminiscent of summer days and classic soda shop flavors.</p>
                    <p>To stand out in the competitive sparkling water market, the brand needed a look that felt refreshing, fun, and effortlessly eye-catching. This vision comes to life through bold colors, a retro-inspired checkerboard pattern, and playful fruit illustrations that reinforce a lighthearted, nostalgic feel. Hand-drawn elements add a sense of approachability, while high-contrast typography ensures clarity and impact on shelves. The minimal yet expressive line art enhances the carefree brand essence, making hydration feel like an experience rather than just a necessity.</p>
                </div>
            </div>
        </div>
        {/* Packaging Design Section */}
        <div className={styles.aboutContainer}>
            <h3 className={styles.aboutTitle}>The Packaging Design</h3>
        </div>
        <FizzleCarousel />
    </section>
  );
}
