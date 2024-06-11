import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import '../style/style.css'
import { useMainContext } from '../hooks/useMainContext'
import Portfolio from '../sections/Portfolio'

const PortfolioPage = () => {
  const {storiesData, portfolioData} = useMainContext(); 
  
  return (
    <>
        <Header  />
        <Portfolio  storiesData={storiesData} data={portfolioData}/>
        <Footer />
    </>
  )
}

export default PortfolioPage