import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/boostrap.css' 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../Components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
