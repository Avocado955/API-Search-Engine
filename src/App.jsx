import { useState } from "react";
import "./App.css";
import BookCard from "./components/BookCard/BookCard";
import BooksContextProvider from "./context/BooksContextProvider";
import SearchTermContextProvider from "./context/SearchTermContextProvider";

function App() {
  return (
    <>
      <SearchTermContextProvider>
        <BooksContextProvider>
          <BookCard></BookCard>
        </BooksContextProvider>
      </SearchTermContextProvider>
    </>
  );
}

export default App;
