import { createContext, useState } from "react";

export const BookContext = createContext(null);
const BookContextProvider = ({ children }) => {
  const [book, setBook] = useState(false);

  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
