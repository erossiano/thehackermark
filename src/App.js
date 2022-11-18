//import axion from "axios";
import React, { useEffect, useState } from 'react'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";

//import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Administrador from './components/Administrador';
import Cliente from './components/Cliente';
import ListaCompras from './components/ListaCompras';
import ListaVentas from './components/ListaVentas';
import TipoUsuario from './components/TipoUsuario';
import Productos from './components/Productos';
import axios from "axios";

//const urlBase = "https://thehackermark.up.railway.app/";

function App() {
  /* const [post, setPost] = useState(null);

  useEffect(() => {
      axios.get(urlBase).then(
        (response) => {
          setPost(response.data);
        }
      );
    }
  ); */

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />

      <Routes>
        <Route path="/" element={<TipoUsuario />} /> 
        <Route path="/tipousuario" element={<TipoUsuario />} />
        <Route exact path="/productos" element={<Productos />}></Route>
        <Route exact path="/listaventas" element={<ListaVentas />}></Route>
        <Route path="/cliente" element={<Cliente />}></Route>
        <Route path="/listacompras" element={<ListaCompras />}></Route>
        <Route path="/administrador" element={<Administrador />}></Route>
      </Routes>
      </Router>
      <Footer />
    </div>
    </DataProvider>
  );
}

export default App;
