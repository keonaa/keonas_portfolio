import FizzleCard from "../components/FizzleCard";
import AdCampaignCard from "../components/AdCampaignCard";
import MilkCard from "@/components/Milk";
import Hero from "../components/Hero";
import styles from "../styles/page.module.css";
import HarmonyCard from "@/components/HarmonyCard";


export default function Home() {
  return (
    <main>
      <Hero />
      <section className={styles.purposeSection}>
        <div className={styles.purposeContent}>
          <h3 className={styles.purposeTitle}>Purpose. Connection. Impact.</h3>
          <div className={styles.purposeText}>
            <p>
              DRIVEN BY THE BELIEF THAT EACH DESIGN HAS ITS OWN UNIQUE STORY THAT CAN CREATE AN IMPACT, 
              I IDENTIFY CREATIVE OPPORTUNITIES TO DELIVER DESIGN SOLUTIONS THAT CONNECT PEOPLE.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.featuredProjects}>
        <div className={styles.featuredProjectsContent}>
          <h2 className={styles.featuredProjectsTitle}>Featured Projects</h2>
          <div className={styles.cards}>
            <HarmonyCard />
            <AdCampaignCard />
            <FizzleCard />
          </div>
        </div>
      </section>
    </main>
  );
}
