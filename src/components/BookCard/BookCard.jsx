import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  return <div className={styles.bookCard}>{book.volumeInfo.title}</div>;
};

export default BookCard;
