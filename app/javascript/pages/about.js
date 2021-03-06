import React from 'react';
import { GlobalStyle } from '../styles/global';

function About() {
  return (
    <div>
      <GlobalStyle/>
      <h1>About</h1><br></br>
      <button type="button" class="btn btn-primary">Primary</button><br></br>
            <button type="button" class="btn btn-secondary">Secondary</button><br></br>
            <button type="button" class="btn btn-success">Success</button><br></br>
            <button type="button" class="btn btn-danger">Danger</button><br></br>
            <button type="button" class="btn btn-warning">Warning</button><br></br>
            <button type="button" class="btn btn-info">Info</button><br></br>
            <button type="button" class="btn btn-light">Light</button><br></br>
            <button type="button" class="btn btn-dark">Dark</button><br></br>
            <button type="button" class="btn btn-link">Link</button><br></br>
    </div>
  );
};

export default About;
