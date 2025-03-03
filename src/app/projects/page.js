import styles from "./project.module.css";
import FizzleCard from "../components/FizzleCard";

export default function Projects() {
    return(
        <section className={styles.projects}>
            <h2>Projects</h2>
            <FizzleCard />
        </section>
    );
}