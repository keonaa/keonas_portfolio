import styles from "./adCampaign.module.css";
import StoryboardCarousel from "../components/storyboardCarousel";

export default function HarmonyAdCampaign() {
    return (
        <section className={styles.harmonyPage}>
            {/* Hero Section */}
            <div className={styles.heroSection}>
                <h2 className={styles.title}>Harmony - Ad Campaign</h2>
                <div className={styles.tags}>
                    <span className={styles.tag}>VIDEOGRAPHY</span>
                    <span className={styles.tag}>VIDEO EDITING</span>
                    <span className={styles.tag}>ADVERTISING</span>
                </div>
                <div className={styles.videoContainer}>
                <iframe 
                src="https://www.youtube.com/embed/FxGQdTEf-u4?si=Icn1xTmrj3F37NQU" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                </div>
            </div>

            {/* About Section */}
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutTitle}>About</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutDetails}>
                        <div className={styles.detailBlock}>
                            <h3 className={styles.detailHeading}>Timeline</h3>
                            <p className={styles.detailText}>2 MONTHS | NOV. 2024 - DEC. 2024</p>
                        </div>
                        <div className={styles.detailBlock}>
                            <h3 className={styles.detailHeading}>Tools</h3>
                            <p className={styles.detailText}>PREMIERE PRO</p>
                        </div>
                    </div>
                    <div className={styles.aboutText}>
                        <p>
                        The Harmony ad campaign video follows the journey of a family caregiver, capturing both the emotional and practical aspects of caregiving through intimate and reflective scenes. By offering a glimpse into a typical day, the video highlights the challenges caregivers face while introducing Harmony, an AI-powered caregiving app designed to ease their workload. Through continuous one-shot filming, immersive cinematography, and a warm, home-like setting, the video fosters empathy by placing viewers in the caregiver’s perspective.
                        </p>
                        <p>
                        Subtle production choices such as handwritten sticky notes, soft background music, and minimal dialogue reinforce the emotional weight of caregiving. Rather than presenting Harmony as just another product, the video frames it as an essential tool for relief and support. The final scene reinforces this message, leaving viewers with a subtle CTA, ensuring they walk away understanding how Harmony can ease their caregiving journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Storyboard */}
            <div className={styles.storyboardSection}>
                <h2 className={styles.storyboardTitle}>The Story Board</h2>
                <p className={styles.storyboardDescription}>
                Before production, we developed a detailed storyboard to map out key moments, ensuring a cohesive and emotionally compelling narrative. This process helped shape the visual storytelling, guiding shot composition and pacing to create a meaningful and engaging experience.
                </p>
            </div>
            <StoryboardCarousel />
        </section>
    );
}
