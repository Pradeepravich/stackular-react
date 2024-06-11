import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import '../style/style.css'
import { useMainContext } from '../hooks/useMainContext'
import Contact from '../sections/Contact'

const ContactPage = () => {
  const { contactUs } = useMainContext(); 
  
  return (
    <>
        <Header  />
        <Contact data={contactUs}/>
        <Footer />
    </>
  )
}

export default ContactPage