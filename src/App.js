
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import React from 'react';
import About from './components/About/About';
import Philosophy from './components/Philosophy/Philosophy';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <About/>
      <Philosophy/>
      <Contact/>
    </div>
  );
}

export default App;
