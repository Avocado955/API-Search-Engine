import BookCard from "../BookCard/BookCard";
import styles from "./BooksList.module.scss";

const BooksList = ({ booksData }) => {
  console.log(booksData);
  return (
    <div className={styles.booksList}>
      {booksData.items.map((book) => {
        console.log(book);
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BooksList;
