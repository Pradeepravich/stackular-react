import React from 'react'
import Header from '../sections/Header'
import About from '../sections/About'
import Footer from '../sections/Footer'
import '../style/style.css'
import { useMainContext } from '../hooks/useMainContext'

const AboutPage = () => {
  const { aboutData } = useMainContext(); 
  
  return (
    <>
        <Header  />
        <About data={aboutData} />
        <Footer />
    </>
  )
}

export default AboutPage