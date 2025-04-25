import React from "react";
import "./App.css";
import Router from "./Router";
import { SnackbarProvider } from "notistack";
import ScrollToTop from "./components/ScrollToTop";

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
        <ScrollToTop />
        <Router />      
    </SnackbarProvider>
  );
}

export default App;
