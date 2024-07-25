import { useContext, useEffect, useState } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BooksLoader.module.scss";
import { getBooksBySearch } from "../../services/books-services";
import BooksList from "../../components/BooksList/BooksList";

//Change name to books loader, remove the books context and just useEffect to grab the books here
const BooksLoader = () => {
  const { searchTerms } = useContext(SearchTermContext);
  const [booksData, setBooksData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("IDLE");

  useEffect(() => {
    console.log(searchTerms);
    if (searchTerms === null) {
      return;
    }

    setFetchStatus("LOADING");
    getBooksBySearch(searchTerms)
      .then((data) => {
        setFetchStatus("SUCCESS");
        setBooksData(data);
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
        console.log(e.message);
      });
  }, [searchTerms]);

  return (
    <>
      {fetchStatus === "IDLE" && <h2>Welcome! To start searching for a book in the Google Books Library, use the search bar above</h2>}
      {fetchStatus === "LOADING" && (
        <h3>
          Searching for books containing {searchTerms.generalTerm} in any area
        </h3>
      )}
      {fetchStatus === "SUCCESS" && <BooksList booksData={booksData} />}
      {fetchStatus === "FAILURE" && <p>{error.message}</p>}
    </>
  );
};

export default BooksLoader;
