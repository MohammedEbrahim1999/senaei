import React from 'react'
import Footer from "./layoutComponent/Footer/Footer.jsx";
import Header from "./layoutComponent/Header/Header.jsx";
import Sidf from "./layoutComponent/Sidf/Sidf.jsx";
import Future from './layoutComponent/Future/Future.jsx';
import Number from './layoutComponent/Numbers/Number.jsx';
import Solution from './layoutComponent/Solutions/Solution.jsx';
import Services from './layoutComponent/Services/Services.jsx';
const Senaei = () => {
  return (
    <>
      <Header />
      <Services />
      <Solution />
      <Future />
      <Number />
      <Sidf />
      <Footer />
    </>
  )
}

export default Senaei;
