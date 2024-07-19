import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ModalContextProvider from "./context/ModalContextProvider.jsx";

/* Modal Context Provider gives a state for the if the modal window is visible */
// Was moved outside of the app to allow for the modal to be housed in the main layer of app, as putting it in booksPage caused a re-render and fetch of all the book each time
ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
);
