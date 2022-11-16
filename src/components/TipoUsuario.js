import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/thm.png";

function TipoUsuario() {
  return (
    <div className="container-fluid text-center">
        <div className="row">
            <div className="col-2"></div>
            <div className="col border mt-5"><br></br> <br></br>
              <img class="img-fluid" src="https://www.becas-santander.com/content/dam/becasmicrosites/blog/computer-books.jpeg" width="600px"/>
                
            </div>
            <div className="col border mt-5">
              {/*<img class="img-fluid" src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/314012421_503932268418412_1944509815264465782_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=lOejjEzQbKIAX83FKoe&_nc_ht=scontent-bog1-1.xx&oh=00_AfDmttqjRmldy5hGZdrKGMXXB1QgAhFDFmAc9ZAH9wlpsg&oe=63675BE0" width="200px"/>*/}
              <img src={Logo} alt="Logo" width="150" />
              <h5>Seleccione el tipo de usuario</h5>
              <Link to="/cliente" class="btn btn-outline-danger mt-3">Cliente</Link><br></br>
              {/*<a href="#" class="btn btn-outline-danger mt-3">{<BtnCliente/>}</a><br></br>*/}
              {/*<Link to='/cliente'><button className='btnIngresar' name="button">Cliente</button></Link>*/}
              <a href="#" class="btn btn-outline-danger mt-3">Proveedor</a><br></br>
              <Link to="/productos" class="btn btn-outline-danger mt-3">Administrador</Link><br></br>
                
            </div>  
            <div className="col-2"></div>       
            </div><br></br>
        <div className="alert alert-warning">Todos los derechos reservados © TheHackerMark 2022</div>
        <samp className="spinner-grow text-danger"></samp>

    </div>  
  );
}

export default TipoUsuario;
