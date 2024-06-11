import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import '../style/style.css'
import { useMainContext } from '../hooks/useMainContext'
import Services from '../sections/Services'

const ServicesPage = () => {
  const {companyStandardData,servicesPageData, services} = useMainContext(); 
  
  return (
    <>
        <Header  />
        <Services companyStandardData={companyStandardData} services={services} data={servicesPageData}/>
        <Footer />
    </>
  )
}

export default ServicesPage