import { useContext, useEffect, useState } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BooksLoader.module.scss";
import { getBooksBySearch } from "../../services/books-services";
import BooksList from "../../components/BooksList/BooksList";
import Spinner from "../../components/Spinner/Spinner";
import booksImage from "../../assets/booksimage.jpg";

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
  
  if (fetchStatus === "IDLE") {
    document.body.classList.add(styles.background_Indigo);
  } else {
    
    document.body.classList.remove(styles.background_Indigo);
    document.body.classList.add(styles.background_White);
  }

  return (
    <>
      {fetchStatus === "IDLE" && <div className={styles.idle}>
        <h2>Welcome! To start searching for a book in the Google Books Library, use the search bar above</h2>
        <img src={booksImage} alt="book" className={styles.idleImage} />
        </div>}
      {fetchStatus === "LOADING" && (<div className={styles.loading}>
        <h3>
          Searching for books containing {searchTerms.generalTerm} in any area
        </h3>
        <Spinner />
      </div>
      )}
      {fetchStatus === "SUCCESS" && <BooksList booksData={booksData} />}
      {fetchStatus === "FAILURE" && <h3 className={styles.errorMessage}>{error.message}</h3>}
    </>
  );
};

export default BooksLoader;
