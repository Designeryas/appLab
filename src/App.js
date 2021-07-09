import React from 'react';
import './App.css';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Companies from './components/companies/companies';
import Download from './components/download/download';
import Features from './components/features/features';
import Slider from './components/slider/slider';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Choose from './components/choose/choose';
import Price from './components/price/price';
import Codes from './components/codes/codes';
import Meet from './components/meet/meet';
import Apps from './components/apps/apps';
import Faq from './components/faq/faq';

function App() {
    return ( 
        <React.Fragment>
            <Navbar/>
            <Slider/>
            <Companies/>
            <Apps/>
            <Codes/>
            <Choose/>
            <Features/>
            <Price/>
            <Meet/>
            <Faq/>
            <Download/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;