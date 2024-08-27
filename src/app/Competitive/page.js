import React from 'react'
import CompetitiveHeader from './Components/CompetitiveHeader/CompetitiveHeader.tsx';
import CompetitiveAbout from './Components/CompetitiveAbout/CompetitiveAbout.tsx';
import CompetitiveSolutions from './Components/CompetitiveSolutions/CompotitiveSolutions.tsx';
import Footer from '../layoutComponent/Footer/Footer.jsx';
import Trip from './Components/Trip/Trip.tsx';
import Documents from './Components/Documents/Documents.tsx';
const Competitive = () => {
    return (
        <>
            <CompetitiveHeader />
            <CompetitiveAbout />
            <CompetitiveSolutions />
            <Trip />
            <Documents />
            <Footer />
        </>
    )
}

export default Competitive;
