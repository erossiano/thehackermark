import React from 'react';

function TipoUsuario() {
  return (
    <div className="container-fluid text-center">
        <div className="row">
            <div className="col-2"></div>
            <div className="col border mt-5">
                <img class="img-fluid" src="https://conviertemas.com/wp-content/uploads/2020/04/ilustracion-concepto-disenador_114360-676.jpg" width="600px"/>
            </div>
            <div className="col border mt-5">
            <img class="img-fluid" src="https://thumbs.dreamstime.com/b/tecnolog%C3%ADa-global-logo-template-design-vector-emblema-concepto-de-dise%C3%B1o-s%C3%ADmbolo-creativo-icono-94271214.jpg" width="200px"/>
                <h5>Seleccione el tipo de usuariO</h5>
                <a href="#" class="btn btn-outline-danger mt-3">ClientesS</a><br></br> 
                <a href="#" class="btn btn-outline-danger mt-3">Proveedor</a><br></br> 
                <a href="admin.html" class="btn btn-outline-danger mt-3">Administrador</a><br></br>
            </div>  
            <div className="col-2"></div>       
            </div><br></br>
        <div className="alert alert-warning">Todos los derechos reservados © TheHackerMark 2022</div>
        <samp className="spinner-grow text-danger"></samp>

    </div>  
  );
}

export default TipoUsuario;
