import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ProductListTable from './components/Product/ProductListTable';
import products from './data/products';

function App() {

//console.log(products[1].id);

  return ( 
    <>
      <div className='header'>
      <span>Hola mundo!</span>
      </div>
      <div className='content'>
      
      <div className='flex container'>
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <ProductListTable data={products} />

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
