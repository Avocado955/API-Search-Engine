import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import SearchForm from "../../components/SearchForm/SearchForm";
import BooksLoader from "../../containers/BooksLoader/BooksLoader";
import styles from "./BooksPage.module.scss";

const BooksPage = () => {
  const { setSearchTerms } = useContext(SearchTermContext);

  const onSubmit = (data) => {
    console.log(data);
    setSearchTerms(data);
  };
  return (
    <div className={styles.booksPage}>
      <SearchForm onSubmit={onSubmit} />
      <BooksLoader />
    </div>
  );
};

export default BooksPage;
