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
      {fetchStatus === "IDLE" && <p>Start searching for a Book</p>}
      {fetchStatus === "LOADING" && (
        <p>
          Searching for a Book containing {searchTerms.generalTerm} in any area
        </p>
      )}
      {fetchStatus === "SUCCESS" && <BooksList booksData={booksData} />}
      {fetchStatus === "FAILURE" && <p>{error.message}</p>}
    </>
  );
};

export default BooksLoader;
