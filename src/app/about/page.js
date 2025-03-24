import Image from "next/image";
import Chips from "@/components/Chips";
import styles from "@/styles/about.module.css";

export default function AboutPage() {
  return (
    <section className={styles.aboutPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.chipGroup}>
          <Chips items={["Night Owl", "enfj", "yapper"]} />
        </div>
      </div>

      {/* Image + Text Block */}
      <div className={styles.bioSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/keona_photo.png"
            alt="About photo"
            width={500}
            height={600}
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.bioText}>
          <h5>Stick around and get to know me!</h5>
          <p>
          I’m a digital designer with a focus on UX/UI design, creating intuitive and engaging experiences that bring ideas to life. I see design as more than just aesthetics. It is about storytelling, impact, and meaningful connections. Every design has the potential to shape experiences and bring people together. By blending creativity with problem-solving, I focus on crafting purposeful, intuitive designs that make a difference.
          </p>
          <p>
          When I’m not designing, you’ll probably catch me going on adventures with my friends, whether it’s cafe-hopping, thrifting, binging Marvel movies, or chasing sunsets. I love being around people, sharing ideas, and making memories along the way. These moments spark my creativity, and I enjoy discovering stories and experiences as I go. I’m always open to new projects and collaborations, so feel free to reach out!.
          </p>
        </div>
      </div>
    </section>
  );
}
