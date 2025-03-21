import styles from "./chips.module.css";

export default function Chips({ items }) {
  return (
    <div className={styles.chipsContainer}>
      {items.map((item, index) => (
        <span key={index} className={styles.chip}>
          {item}
        </span>
      ))}
    </div>
  );
}