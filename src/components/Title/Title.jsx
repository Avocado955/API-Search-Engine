import styles from "./Title.module.scss";

const Title = ({ title }) => {
  return (
    <div className={styles.titleBackground}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Title;
