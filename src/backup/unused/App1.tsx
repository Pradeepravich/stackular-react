import React from "react";
import "./App.css";
import Router from "../../Router";
import MainContextProvider from "../../contexts/MainContext";
import { SnackbarProvider } from "notistack";
import ScrollToTop from "../../components/ScrollToTop";

function App() {
  // useEffect(() => {
  //   /**
  //    * Preloader
  //    */
  //   const preloader = document.querySelector("#preloader");
  //   if (preloader) {
  //     window.addEventListener("load", () => {
  //       preloader.remove();
  //     });
  //   }
  // }, []);
  return (
    <SnackbarProvider>
      <MainContextProvider>
        <ScrollToTop />
        <Router />
      </MainContextProvider>
    </SnackbarProvider>
  );
}

export default App;
