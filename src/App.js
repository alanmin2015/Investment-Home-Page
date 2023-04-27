
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import About from './components/About/About';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Philosophy from './components/Philosophy/Philosophy';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div >
  
     <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/philosophy">
          <Philosophy />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
