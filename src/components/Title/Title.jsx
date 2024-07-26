import styles from "./Title.module.scss";

const Title = ({ title }) => {
  return (
    <div className={styles.titleBackground}>
      <img src="/book.svg" alt="" width="150px" height="150px" />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Title;
