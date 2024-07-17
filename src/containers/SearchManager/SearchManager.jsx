import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import SearchForm from "../../components/SearchForm/SearchForm";

// THIS MAY BE REPLACED WITH BOOK PAGE AND BOOK LOADER
const SearchManager = () => {
  const { setSearchTerms } = useContext(SearchTermContext);

  const onSubmit = (data) => {
    console.log(data);
    setSearchTerms(data);
  };

  return <SearchForm onSubmit={onSubmit} />;
};

export default SearchManager;
