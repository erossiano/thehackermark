import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Basicos() {
  return (
    <div>
        <h1>Conceptos básicos de rutas</h1>
        <Router>
            <Routes>
                <Route path="/" element={<>Esto es el inicio</>}/>
                <Route path="/registro" element={<p>Regístrate</p>}/>
                <Route path="/login" element={<p>Logueate</p>}/> 
            </Routes>
        </Router>
    </div>
  )
}
   
export default Basicos;