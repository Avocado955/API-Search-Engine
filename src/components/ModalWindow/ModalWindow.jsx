import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import styles from "./ModalWindow.module.scss";

const ModalWindow = ({ onClose }) => {
  const { isShowingModal, setIsShowingModal } = useContext(ModalContext);

  return (
    <div className={styles.modal}>
      <h1>Modal Window</h1>
      {/* <h2>{book.volumeInfo.title}</h2> */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalWindow;
