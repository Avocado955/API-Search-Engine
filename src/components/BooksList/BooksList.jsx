import BookCard from "../BookCard/BookCard";
import styles from "./BooksList.module.scss";

const BooksList = ({ booksData }) => {
  return (
    <div className={styles.booksList}>
      {booksData.items.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BooksList;
