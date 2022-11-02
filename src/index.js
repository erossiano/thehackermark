import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaVentas from './components/ListaVentas';
import Cliente from './components/Cliente';
import ListaCompras from './components/ListaCompras';
import TipoUsuario from './components/TipoUsuario';
import Contador from './components/Contador';
import Productos from './Productos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TipoUsuario />
    <App />
    <ListaVentas />
    <Cliente />
    <ListaCompras />
    <Contador />
    <Productos />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
