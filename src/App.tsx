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

    /**
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
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
