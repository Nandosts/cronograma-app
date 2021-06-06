import React from 'react'
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Link } from 'react-router-dom'


function Home() {
    return(
        <>
            <p>Oi, Essa é a página "Homepage".</p> 
            <Link to={`/about`}>About</Link>
            <br></br>
            <Link to={`/contact`}>Contact</Link>
        </>    
    )
}

export default Home