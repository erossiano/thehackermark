import React, {useContext} from 'react'
import { DataContext } from "../../../context/DataProvider";
import RegistrationForm from '../../Login/RegistrationForm';
import { ProductoItem } from "./ProductoItem";

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
		<>
			<h1 className="produ">Registro de Usuario</h1>
			<div className="container">
				<RegistrationForm />
			</div>
		</>
    )
}
