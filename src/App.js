import React from 'react';
//import logo from './logo.svg';
import './App.css';


import {
BrowserRouter,
// eslint-disable-next-line
routes,
Route,
Routes
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';

function App() {

//console.log(products[1].id);

  return ( 
    <>
    <BrowserRouter>
        <Routes>
              <Route index element={< Home /> } />
              <Route path='/login' element={< Login /> } />
        </Routes>
    </BrowserRouter>

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
