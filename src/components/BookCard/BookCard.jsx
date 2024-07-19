import { useContext } from "react";
import styles from "./BookCard.module.scss";
import { ModalContext } from "../../context/ModalContextProvider";
import { BookContext } from "../../context/BookContextProvider";

const BookCard = ({ book }) => {
  const { setIsShowingModal } = useContext(ModalContext);
  const { setBook } = useContext(BookContext);
  const onBookClicked = () => {
    console.log("This book was clicked " + book.volumeInfo.title);
    setBook(book);
    setIsShowingModal(true);
  };

  return (
    <div>
      <div className={styles.bookCard} onClick={onBookClicked}>
        <h2>{book.volumeInfo.title}</h2>
      </div>
    </div>
  );
};

export default BookCard;
