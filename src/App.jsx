import { useState } from "react";
import "./App.css";
import BookCard from "./components/BookCard/BookCard";
import BooksContextProvider from "./context/BooksContextProvider";
import SearchTermContextProvider from "./context/SearchTermContextProvider";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchManager from "./containers/SearchManager/SearchManager";

function App() {
  return (
    <>
      <SearchTermContextProvider>
        <BooksContextProvider>
          <h1>Google Books API Search Engine</h1>
          <SearchManager />
          <BookCard></BookCard>
        </BooksContextProvider>
      </SearchTermContextProvider>
    </>
  );
}

export default App;
