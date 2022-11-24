//import axion from "axios";
import React from 'react'
import { Header } from "./components/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from "./components/Footer";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
//import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Navbar from './components/page/inicio/Navbar';

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
