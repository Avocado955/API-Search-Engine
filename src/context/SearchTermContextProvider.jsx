import { createContext, useState } from "react";

export const SearchTermContext = createContext(null);

const SearchTermContextProvider = ({ children }) => {
  const [searchTerms, setSearchTerms] = useState(null);

  return (
    <SearchTermContext.Provider value={{ searchTerms, setSearchTerms }}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;
