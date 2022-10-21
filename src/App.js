import React, {useEffect, useState}  from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login.js';

function App() {
  return ( 
    <>
      <div className='header'>
      <span>Hola mundo!</span>
      </div>
      <div className='content'>
      
      <div className='flex container'>
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <Login />
      </div>
      </div>
</>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
