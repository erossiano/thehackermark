import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  //const [cantidad, setCantidad] = useState(1);

  const tooglefalse = () => {
    setMenu(false);
	};
	
	const reduce = isbn =>{
		carrito.forEach(item =>{
			if(item.isbn === isbn){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
				//cantidad === 1 ? setCantidad(1): setCantidad(cantidad-1);
			}
			setCarrito([...carrito])
		})
	}
	const increase = isbn =>{
		carrito.forEach(item =>{
			if(item.isbn === isbn){
				//setCantidad(cantidad+=1)
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}

	const removeProducto = isbn =>{
		if(window.confirm("¿Quieres suspender el producto?")){
			carrito.forEach((item, index)=>{
				if(item.isbn === isbn){
					item.cantidad = 1;
					//setCantidad(1);
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}

  const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
	


  return (
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>
        <div className="carrito__center">
					{
					
					
					carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
					{
					carrito.map((producto) => (
            			<div className="carrito__item" key={producto.isbn}>
						<img src={producto.image} alt={producto.title} />
						<div>
							<h3> {producto.title} </h3>
							<p className="price">${producto.price}</p>
						</div>
						<div>
							<box-icon 
								onClick={() => increase(producto.isbn)} name="up-arrow" 
								type="solid"
								/>
							<p className="cantidad">{producto.cantidad}</p>
								<box-icon 
									onClick={() => reduce(producto.isbn)} 
									name="down-arrow" 
									type="solid" 
									/>
						</div>
										<div 
										onClick={() => removeProducto(producto.isbn)} 
										className="remove__item"
										>
							<box-icon name="trash" />
						</div>
						</div>
					))
				};
					
					</>
					}
        </div>

        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
};
