import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import styles from "./ModalWindow.module.scss";
import { BookContext } from "../../context/BookContextProvider";
import ExpandableText from "../../containers/ExpandableText/ExpandableText";

const ModalWindow = ({ onClose, toDisplay }) => {
  const { isShowingModal, setIsShowingModal } = useContext(ModalContext);

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
        <div className={styles.modal_container}>{toDisplay}</div>
        <button onClick={onClose} className={styles.btn}>
          X
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
