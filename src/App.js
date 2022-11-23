//import axion from "axios";
import React from 'react'
import { Header } from "./components/Header";
import RegistrationForm from './components/Login/RegistrationForm';
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
import { ProductosList } from './components/page/productos/ProductosList';
import Navbar from './components/page/inicio/Navbar';
import { RegisterPage } from './components/page/usuarios/RegisterPage';
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
          </Router>
          <Footer />
        </div>
    </DataProvider>
   
  );
}

export default App;
