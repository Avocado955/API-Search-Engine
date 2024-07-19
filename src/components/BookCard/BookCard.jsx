import { useContext } from "react";
import styles from "./BookCard.module.scss";
import { ModalContext } from "../../context/ModalContextProvider";

const BookCard = ({ book }) => {
  const { setIsShowingModal } = useContext(ModalContext);
  const onBookClicked = () => {
    console.log("This book was clicked " + book.volumeInfo.title);
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
