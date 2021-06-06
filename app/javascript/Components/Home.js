import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


function Home() {
    return(
        <>
            <p>Oi, Essa é a página "Homepage".</p> 
            <Link to={`/about`}>About</Link>
            <br></br>
            <Link to={`/contact`}>Contact</Link>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
              Tooltip with HTML
            </button>

        </>    
    )
}

export default Home