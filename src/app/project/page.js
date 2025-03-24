import styles from "@/styles/project.module.css";
import FizzleCard from "@/components/FizzleCard";
import AdCampaignCard from "@/components/AdCampaignCard"
import MilkCard from "@/components/Milk";
import HarmonyCard from "@/components/HarmonyCard";

export default function Projects() {
  return(
    <section className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cards}>
        <HarmonyCard />
        <AdCampaignCard />
        <FizzleCard />
        <MilkCard />
      </div>
    </section>
  );
}