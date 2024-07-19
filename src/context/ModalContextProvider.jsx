import { createContext, useState } from "react";

export const ModalContext = createContext(null);
const ModalContextProvider = ({ children }) => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  return (
    <ModalContext.Provider value={{ isShowingModal, setIsShowingModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
