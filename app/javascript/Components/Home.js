import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


function Home() {
    return(
        <>
            <p>Oi, Essa é a página "Homepage".</p> 
            <Link to={`/about`}>About</Link>
            <br></br>
            <Link to={`/contact`}>Contact</Link>
            <br></br>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
              Tooltip with HTML
            </button><br></br>
            <button type="button" class="btn btn-primary">Primary</button><br></br>
            <button type="button" class="btn btn-secondary">Secondary</button><br></br>
            <button type="button" class="btn btn-success">Success</button><br></br>
            <button type="button" class="btn btn-danger">Danger</button><br></br>
            <button type="button" class="btn btn-warning">Warning</button><br></br>
            <button type="button" class="btn btn-info">Info</button><br></br>
            <button type="button" class="btn btn-light">Light</button><br></br>
            <button type="button" class="btn btn-dark">Dark</button><br></br>
            <button type="button" class="btn btn-link">Link</button><br></br>
        </>    
    )
}

export default Home