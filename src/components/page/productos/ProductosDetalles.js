import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    //item = 0;
    productos.forEach(producto =>{
     
      if(producto.isbn === params.id){
      console.log('id: ' , params.id, ' - product isbn: ', producto);
        this.setDetalle([producto]);
        //viene vacio el detalle console.log("Detalle; ", detalle);
        setUrl(0);
      }
    });
  },[params.id, productos]);

  //console.log(url);

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id]);

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  };

  if(detalle.length < 1) return null;
  console.log('detalle: AQUI');
  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
          <p className="nuevo">Nuevo</p>
          <div className="tamano">
            <select placeholder="Cantidad" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <p>Cantidad</p>
          </div>
          </div>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
          }
          { {/* <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />  */}}
          <div className="description">
          <p><b>Descripción: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,</p>
          </div>
          
        </div>
      }
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
        {
          productos.map((producto) => {
            if((item < 6)&&(detalle.category === producto.category)){
              item++;
            return <ProductoItem 
                    key={producto.isbn}
                    title={producto.title}
                    image={producto.image}
                    category={producto.category}
                    price={producto.price}
                    id={producto.isbn}
                  />
          }
        })
      }
     
    </div>
    </>
  )
}
