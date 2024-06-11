import React from 'react'
import Header from '../sections/Header'
import Home from '../sections/Home'
import Footer from '../sections/Footer'
import '../style/style.css'
import { useMainContext } from '../hooks/useMainContext'

const HomePage = () => {
  const { data, storiesData, tribeData, companyStandardData } = useMainContext(); 
  
  return (
    <>
        <Header  />
        <Home  data={data} storiesData={storiesData} tribeData={tribeData} companyStandardData={companyStandardData}/>
        <Footer />
    </>
  )
}

export default HomePage