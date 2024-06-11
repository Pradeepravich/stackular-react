import React, { useEffect } from 'react';
import './App.css';
import Router from './Router';
import MainContextProvider from './contexts/MainContext';

function App() {
  useEffect(()=>{

    

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  },[])
  return (
    <MainContextProvider>      
        <Router />      
    </MainContextProvider>
  );
}

export default App;
