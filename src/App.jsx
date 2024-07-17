import { useState } from "react";
import BookCard from "./components/BookCard/BookCard";
import BooksContextProvider from "./context/BooksContextProvider";
import SearchTermContextProvider from "./context/SearchTermContextProvider";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchManager from "./containers/SearchManager/SearchManager";
import BooksPage from "./pages/BooksPage/BooksPage";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <SearchTermContextProvider>
        <Title title="Google Books Search Engine" />
        <BooksPage />
      </SearchTermContextProvider>
    </>
  );
}

export default App;
