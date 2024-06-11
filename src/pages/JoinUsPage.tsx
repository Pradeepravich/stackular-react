import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import '../style/style.css'
import { useMainContext } from '../hooks/useMainContext'
import JoinUs from '../sections/JoinUs'

const JoinUsPage = () => {
  const { tribeData, joinUsData } = useMainContext(); 
  
  return (
    <>
        <Header  />
        <JoinUs tribeData={tribeData} data={joinUsData}/>
        <Footer />
    </>
  )
}

export default JoinUsPage