import React from 'react'
import Footer from '../layoutComponent/Footer/Footer'
import QHeader from './Components/qHeader/qHeader'
import QContent from './Components/QContent/QContent'
import FAQs from './Components/Faqs/Faqs.tsx'

const Questions = () => {
  return (
    <>
    <QHeader />
    <QContent />
    <FAQs />
    <Footer/>
    </>
  )
}

export default Questions
