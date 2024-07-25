import { useContext } from "react";
import ExpandableText from "../ExpandableText/ExpandableText";
import { BookContext } from "../../context/BookContextProvider";
import styles from "./ModalBookDisplay.module.scss";

const ModalBookDisplay = () => {
  const { book } = useContext(BookContext);
  let bookImage = "https://publications.iarc.fr/uploads/media/default/0001/02/thumb_1291_default_publication.jpeg"
  if(book.volumeInfo.imageLinks !== undefined) {
    bookImage = book.volumeInfo.imageLinks.thumbnail;
  }

  return (
    <>
      <div>
        <img src={bookImage} alt="" />
      </div>
      <div className={styles.text}>
        <h2>{book.volumeInfo.title}</h2>
        <h3>
          {book.volumeInfo.authors?.join(" & ") ??
            "Author Information Unavailable"}
        </h3>
        <ExpandableText>{book.volumeInfo.description}</ExpandableText>
      </div>
      {book.saleInfo.buyLink && <a href={book.saleInfo.buyLink} target="blank">
        Store Page  
      </a>}
    </>
  );
};

export default ModalBookDisplay;
