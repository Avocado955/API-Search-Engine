import { useContext } from "react";
import ExpandableText from "../ExpandableText/ExpandableText";
import { BookContext } from "../../context/BookContextProvider";
import styles from "./ModalBookDisplay.module.scss";

const ModalBookDisplay = () => {
  const { book } = useContext(BookContext);
  return (
    <>
      <div>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      </div>
      <div className={styles.text}>
        <h2>{book.volumeInfo.title}</h2>
        <h3>
          {book.volumeInfo.authors?.join(" & ") ??
            "Author Information Unavailable"}
        </h3>
        <ExpandableText>{book.volumeInfo.description}</ExpandableText>
      </div>
      <a href={book.saleInfo.buyLink} target="blank">
        Store Page
      </a>
    </>
  );
};

export default ModalBookDisplay;
