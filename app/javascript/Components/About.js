import { BrowserRouter as Router, Link } from 'react-router-dom'
import React from 'react'

function About() {
    return(
        <>
            <Link to={`/`}>Home</Link>
            <p>Oi, Essa é a página "About".</p>
            <Link to={`/contact`}>Contact</Link>
        </>
    )
}

export default About