import { BrowserRouter as Router, Link } from 'react-router-dom'
import React from 'react'

function Contact() {
    return(
        <>
            <Link to={`/about`}>About</Link>
            <p>Oi, Essa é a página "Contact".</p> 
        </>  
    )
}

export default Contact