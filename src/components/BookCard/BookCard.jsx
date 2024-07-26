import { useContext } from "react";
import styles from "./BookCard.module.scss";
import { ModalContext } from "../../context/ModalContextProvider";
import { BookContext } from "../../context/BookContextProvider";
import noCoverImage from "../../assets/noCoverImage.png";

const BookCard = ({ book }) => {
  const { setIsShowingModal } = useContext(ModalContext);
  const { setBook } = useContext(BookContext);
  const onBookClicked = () => {
    console.log("This book was clicked " + book.volumeInfo.title);
    setBook(book);
    setIsShowingModal(true);
  };

  //"https://publications.iarc.fr/uploads/media/default/0001/02/thumb_1291_default_publication.jpeg"
  let bookImage = noCoverImage;
  if(book.volumeInfo.imageLinks !== undefined) {
    bookImage = book.volumeInfo.imageLinks.thumbnail;
  }

  let bookTitle = book.volumeInfo.title.length >= 50 ? book.volumeInfo.title.substring(0, 50) + "..." : book.volumeInfo.title;
  

  return (
    <div>
      <div className={styles.bookCard} onClick={onBookClicked}>
        <img src={bookImage} alt="" className={styles.bookCard_img}/>
        <h4 className={styles.bookCard_txt}>{bookTitle}</h4>
        <h5 className={styles.bookCard_txt_author}>{book.volumeInfo.authors?.join(" & ") ?? "No Author Provided"}</h5>
      </div>
    </div>
  );
};

export default BookCard;
