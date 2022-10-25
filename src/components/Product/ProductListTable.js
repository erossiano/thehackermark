import React from "react";
import './product.css';


const ProductListTable = (props) => {

    const Rows = () => {
        return (
            (props.data).map((item) => {
            //console.log(item.id);
               return ( <tr >
                <td>{item.id}</td>
                <td><img src={item.urlImagen} width="200px" ></img></td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                </tr>)
             })
        )};

    return (

            <table className="product">
                <caption>Productos</caption>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Nombre</th>
                    <th>Valor</th>
                </tr>
                <Rows />
            </table>
    )
};


export default ProductListTable;