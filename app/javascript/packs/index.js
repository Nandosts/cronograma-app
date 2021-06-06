import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages';
import About from '../pages/about';
import Services from '../pages/services';
import Contact from '../pages/contact';
import SignUp from '../pages/signup';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>      
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact-us' component={Contact} />
      <Route path='/sign-up' component={SignUp} />
    </Switch>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
