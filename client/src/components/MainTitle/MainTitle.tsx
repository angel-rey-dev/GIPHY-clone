import styles from "./MainTitle.module.scss";

type TitleProps = {
  title: string;
};

export default function MainTitle({ title }: TitleProps) {
  return <h2 className={styles.mainTitle}>{title}</h2>;
}
