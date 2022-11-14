import React, { createContext, useState, useEffect } from "react";
//import Data from "../data/products2.js";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)

	const producto = getData();

	//console.log("producto(line:12): ", producto)	

  useEffect(() => {
		//const producto = Data.items 
		//const producto = getData();
		if(producto){
			setProductos(producto)
		}else{
			setProductos([])
		}
	}, []);

	const addCarrito = (isbn) =>{
		const check = carrito.every(item =>{
			return item.isbn !== isbn
			
		})

		if(check){
			const data = productos.filter(producto =>{
				return producto.isbn === isbn
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		productos : [productos],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};

function getData(){
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", 'http://localhost:3001/api/products/', false);
	xhttp.send()
	return JSON.parse(xhttp.responseText);
}
