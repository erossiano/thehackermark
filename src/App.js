//import axion from "axios";
import React from 'react'
import { Header } from "./components/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from "./components/Footer";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
//import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
import { Router, Routes, Route  } from "react-router-dom";
import Navbar from './components/page/inicio/Navbar';
//import { Routes, Route} from "react-router-dom";
import { ProductosList } from "./page/productos/ProductosList";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import { RegisterPage } from "./page/usuarios/RegisterPage";
import TipoUsuario from "./TipoUsuario";
import Productos from "./Productos";
import ListaVentas from "./ListaVentas";
import Cliente from "./Cliente";
import ListaCompras from "./ListaCompras";
import Administrador from "./Administrador";
import LoginPage from "./page/usuarios/LoginPage";
//import axios from "axios";

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
          <Router basename="/thehackermark">
            <Header />
            <Carrito />
            <Navbar />
            <Pages />

          <Routes>
            <Route path="/" element={<ProductosList/>} />
            <Route exact path="/productos" element={<Productos />}></Route>
        
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/producto/:id" element={<ProductosDetalles />} />

            <Route path="/tipousuario" element={<TipoUsuario />} />
            <Route exact path="/listaventas" element={<ListaVentas />}></Route>
            <Route path="/cliente" element={<Cliente />}></Route>
            <Route path="/listacompras" element={<ListaCompras />}></Route>
            <Route path="/administrador" element={<Administrador />}></Route>
          </Routes>
          </Router>
          <ToastContainer position="bottom-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"/>
          <Footer />
        </div>
    </DataProvider>
   
  );
}

export default App;
