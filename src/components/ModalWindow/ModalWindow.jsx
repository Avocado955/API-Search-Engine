import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import styles from "./ModalWindow.module.scss";
import { BookContext } from "../../context/BookContextProvider";
import ExpandableText from "../../containers/ExpandableText/ExpandableText";

const ModalWindow = ({ onClose }) => {
  const { isShowingModal, setIsShowingModal } = useContext(ModalContext);
  const { book } = useContext(BookContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.modal_container}>
          <div>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>
          <div className={styles.modal_text}>
            <h2>{book.volumeInfo.title}</h2>
            <h3>
              {book.volumeInfo.authors?.join(" & ") ??
                "Author Information Unavailable"}
            </h3>
            <ExpandableText>{book.volumeInfo.description}</ExpandableText>
            {/* <p>{book.volumeInfo.description ?? "No Description Available"}</p> */}
          </div>
        </div>
        <button onClick={onClose} className={styles.btn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
