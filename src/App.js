import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import IntroSection from './IntroSection';
import Footer from './Footer';

import Work from './Work';
import About from './About';
import Contact from './Contact';

import PROJECTS from './data.js';

import { useState, useEffect } from 'react';


const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
      border: none;
    }
  }

  body {
    height: 100%;
  }
`

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Router>
        <div>
          <Header />
          <IntroSection />
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Work />

            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}




export default App;
