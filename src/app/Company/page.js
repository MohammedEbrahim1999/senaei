import React from 'react'
import Footer from '../layoutComponent/Footer/Footer.jsx';
import CompanyHeader from './Components/cHeader/companyHeader.jsx';
import AboutProgram from './Components/AboutProgram/AboutProgram.tsx';
import Tech from './Components/Tech/Tech.jsx';
const Company = () => {
  return (
    <>
      <CompanyHeader />
      <AboutProgram />
      <Tech />
      <Footer />
    </>
  )
}

export default Company;
