import React from 'react'
import SmallHeader from './components/smallHeader/smallHeader.jsx';
import Footer from '../layoutComponent/Footer/Footer.jsx';
import SmallAbout from './components/SmallAbout/SmallAbout.jsx';
import Guide from './components/Guide/Guide.tsx';
import Money from './components/Money/Money.tsx';
import Society from './components/Society/Society.tsx';
const SmallCompany = () => {
    return (
        <>
            <SmallHeader />
            <SmallAbout />
            <Guide />
            <Money />
            <Society />
            <Footer />
        </>
    )
}

export default SmallCompany
