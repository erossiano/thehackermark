import React from 'react';
import ProductTable from '../components/Product/ProductTable';


const Home = () => {
return (<div>
    <h3>Lista de Productos</h3>
        <div className="container">
            <ProductTable />
        </div>
        </div>
)
}


export default Home;