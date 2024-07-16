import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import SearchForm from "../../components/SearchForm/SearchForm";

const SearchManager = () => {
  const { setSearchTerms } = useContext(SearchTermContext);

  const onSubmit = (data) => {
    console.log(data);
    setSearchTerms(data);
  };

  return <SearchForm onSubmit={onSubmit} />;
};

export default SearchManager;
