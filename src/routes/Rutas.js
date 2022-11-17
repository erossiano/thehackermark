import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Administrador from '../components/Administrador';
import Cliente from '../components/Cliente';
import ListaCompras from '../components/ListaCompras';
import ListaVentas from '../components/ListaVentas';
import TipoUsuario from '../components/TipoUsuario';
import Productos from '../components/Productos';

function Rutas() {
  return (
    <div>
        <Router>
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
    </div>
  )
}
   
export default Rutas;