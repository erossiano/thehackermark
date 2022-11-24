import React from 'react';

import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Administrador from '../components/Administrador';
import Cliente from '../components/Cliente';
import ListaCompras from '../components/ListaCompras';
import ListaVentas from '../components/ListaVentas';
import TipoUsuario from '../components/TipoUsuario';
import Productos from '../components/Productos';

const Rutas = () => {
  return (
    <div>
        <Router>
            <Routes>
            <Route exact path="/" element={<TipoUsuario />}></Route> 
              <Route exact path="/tipousuario" element={<TipoUsuario />}></Route>
              <Route exact path="/cliente" element={<Cliente />}></Route>
              <Route exact path="/listacompras" element={<ListaCompras />}></Route>
              {/*<Route exact path="/administrador" element={<Administrador />}></Route>*/}
              <Route exact path="/listaventas" element={<ListaVentas />}></Route>
              <Route exact path="/productos" element={<Productos />}></Route>
            </Routes>
        </Router>
    </div>
  )
}
   
export default Rutas;