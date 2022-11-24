import React from "react";
import { Routes, Route} from "react-router-dom";
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
import AdminProductos from "./components/productos/AdminProductos"


export default function Page() {
  return (
      <Routes>
				<Route path="/" element={<ProductosList/>} />
        <Route exact path="/productos" element={<Productos />}></Route>
        <Route exact path="/productos/admin" element={<AdminProductos />}></Route>
        

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/producto/:id" element={<ProductosDetalles />} />

        <Route path="/tipousuario" element={<TipoUsuario />} />
        <Route exact path="/listaventas" element={<ListaVentas />}></Route>
        <Route path="/cliente" element={<Cliente />}></Route>
        <Route path="/listacompras" element={<ListaCompras />}></Route>
        <Route path="/administrador" element={<Administrador />}></Route>
			</Routes>
   );
}
