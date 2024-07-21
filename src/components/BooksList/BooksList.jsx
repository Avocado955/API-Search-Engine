import { useContext } from "react";
import BookCard from "../BookCard/BookCard";
import styles from "./BooksList.module.scss";
import { SearchTermContext } from "../../context/SearchTermContextProvider";

const BooksList = ({ booksData }) => {
  const { searchTerms } = useContext(SearchTermContext);

  return (
    <div className={styles.page}>
      <h2>Search results for: {searchTerms.generalTerm}</h2>
      <div className={styles.booksList}>
        {booksData.items.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default BooksList;
