import { createContext, useState } from "react";

export const BooksContext = createContext(null);

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState();

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
