import SearchTermContextProvider from "./context/SearchTermContextProvider";
import BooksPage from "./pages/BooksPage/BooksPage";
import Title from "./components/Title/Title";
import BookContextProvider from "./context/BookContextProvider";
import { useContext } from "react";
import { ModalContext } from "./context/ModalContextProvider";
import { createPortal } from "react-dom";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import ModalBookDisplay from "./containers/ModalBookDisplay/ModalBookDisplay";
import Footer from "./components/Footer/Footer";

function App() {
  const { isShowingModal, setIsShowingModal } = useContext(ModalContext);

  return (
    <>
      {/* Book Context Provider gives which book has been selected from the list shown to pass the details to the modal window */}
      <BookContextProvider>
        {/* Search Term Context Provider gives the search object which will allow for making more complex searchs */}
        <SearchTermContextProvider>
          <Title title="GOOGLE BOOKS SEARCH ENGINE" />
          <BooksPage />
          {isShowingModal &&
            createPortal(
              <ModalWindow
                onClose={() => setIsShowingModal(false)}
                toDisplay={<ModalBookDisplay />}
              />,
              document.body
            )}
            <Footer />
        </SearchTermContextProvider>
      </BookContextProvider>
    </>
  );
}

export default App;
