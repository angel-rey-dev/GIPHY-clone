import styles from "./Grid.module.scss";

type GridProps = {
  items: Array<any>;
};

export default function Grid({ items }: GridProps) {
  return (
    <section className={`${styles.container} ${styles.grid}`}>
      {items &&
        items.map((item) => (
          <div className={styles.item} key={item.id}>
            <img src={item.images.medium} alt={item.title} />
          </div>
        ))}
    </section>
  );
}
