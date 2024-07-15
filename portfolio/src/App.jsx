// App.js
import React from 'react'
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
import './style.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
