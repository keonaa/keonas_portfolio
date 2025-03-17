import styles from "./project.module.css";
import FizzleCard from "../components/FizzleCard";
import AdCampaignCard from "../components/AdCampaignCard";

export default function Projects() {
    return(
        <section className={styles.projects}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.cards}>
                <FizzleCard />
                <AdCampaignCard />
            </div>
        </section>
    );
}