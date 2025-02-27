import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hey! I'm Keona</h1>
      <p style={{ textTransform: "uppercase" }}>A multidisciplinary digital designer specializing in UX/UI design.</p>
    </section>
  );
}
