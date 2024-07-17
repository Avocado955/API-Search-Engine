import SearchTermContextProvider from "./context/SearchTermContextProvider";
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
