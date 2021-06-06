import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '../styles/global';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            </Switch>
        </div>
    );
}

export default App