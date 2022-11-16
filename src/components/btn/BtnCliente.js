import React from 'react';
import { Link } from 'react-router-dom';


const BtnCliente = () => {
  return (
    <div className='cotainerBtn'>
      <Link to='/btncliente'><button className='btnIngresar' name="button">Cliente</button></Link>
    </div>
  );
}

export default BtnCliente