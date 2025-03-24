import styles from "@/styles/milk.module.css";
import Chips from "@/components/Chips";
import MilkCarousel from "@/components/MilkCarousel";

export default function HarmonyAdCampaign() {
  return (
    <section className={styles.harmonyPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h2 className={styles.title}>Which Milk is Best for You?</h2>
        <div className={styles.tags}>
          <Chips items={["motion graphics", "illustration"]} />
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/tN1G5GdtVuQ?si=6CuGbsd44be-TZMy"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>About</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutDetails}>
            <div className={styles.detailBlock}>
              <h3 className={styles.detailHeading}>Timeline</h3>
              <p className={styles.detailText}>2 Months | Mar. 2024 - May. 2024</p>
            </div>
            <div className={styles.detailBlock}>
              <h3 className={styles.detailHeading}>Tools</h3>
              <p className={styles.detailText}>After Effects</p>
              <p className={styles.detailText}>Illustrator</p>
            </div>
          </div>
          <div className={styles.aboutText}>
            <p>
              &quot;Which Milk is Best for You?&quot; is an animated motion graphics video that explores different types of milk, making nutritional and environmental comparisons in a fun and engaging way. The goal was to present educational content in a visually dynamic format that keeps viewers entertained while learning.
            </p>
            <p>
              To bring this concept to life, illustrations were created using bright, playful colors to make the visuals feel lively and inviting. The animation is enhanced with smooth transitions and energetic sound effects, adding personality and a sense of rhythm to the storytelling. These elements work together to create an engaging experience that reflects my creative style while keeping the content approachable and informative.
            </p>
          </div>
        </div>
      </div>

      {/* Assets */}
      <div className={styles.storyboardSection}>
        <h2 className={styles.storyboardTitle}>Assets</h2>
      </div>
      <MilkCarousel />
    </section>
  );
}
