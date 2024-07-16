import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import { BooksContext } from "../../context/BooksContextProvider";

const BooksDisplay = () => {
  const { searchTerms } = useContext(SearchTermContext);
  const { books } = useContext(BooksContext);

  return <div>BooksDisplay</div>;
};

export default BooksDisplay;
