import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import SearchForm from "../../components/SearchForm/SearchForm";
import BooksLoader from "../../containers/BooksLoader/BooksLoader";

const BooksPage = () => {
  const { setSearchTerms } = useContext(SearchTermContext);

  const onSubmit = (data) => {
    console.log(data);
    setSearchTerms(data);
  };
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <BooksLoader />
    </div>
  );
};

export default BooksPage;
