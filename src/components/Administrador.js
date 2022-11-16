import React from 'react';
function Administrador() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
          <div className="col-3"></div>
          <div className="col border mt-3">
              <img class="img-fluid" src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/314012421_503932268418412_1944509815264465782_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=lOejjEzQbKIAX83FKoe&_nc_ht=scontent-bog1-1.xx&oh=00_AfDmttqjRmldy5hGZdrKGMXXB1QgAhFDFmAc9ZAH9wlpsg&oe=63675BE0" width="200px"/>
          </div>
          <div className="col border mt-3">
              <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TZlVYaV9HbU7MuTYStqtVkbKjQpgUUTu2Q&usqp=CAU" width="80px"/>
              <p>DANILO HERNÁNDEZzz <br></br>Administrador</p>
          </div>       
          <div className="col-3"></div>       
      </div>

        <div className="row mt-3">
            <div class="col-3"></div>
            <h5>Lista de productos</h5>
            <div class="col-3"></div><br></br>
        </div>
        <div className="row mt-3 ">
            <div className="col-1"></div>
            <div className="col border border-warning">
              <p>FUNDAMENTOS DE ROBÓTICA</p>
              <h5>Antonio Barrientos Cruz</h5>
                <div className="row">
                    <div className="col-5">
                        <h5>$279.000</h5>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning btn-sm">
                            Unidades disponibles <samp class="badge bg-dark rounded-pill">6</samp>
                        </button>
                    </div>                    
                </div>
                <div className="row mt-3">
                    <div className="col-5">
                        <a href="https://reactjs.org" className="alert-link">Descripción</a>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary">Modificar</button>                       
                    </div>                  
                </div>
                <img class="img-fluid" src="https://thumbs.dreamstime.com/b/tecnolog%C3%ADa-global-logo-template-design-vector-emblema-concepto-de-dise%C3%B1o-s%C3%ADmbolo-creativo-icono-94271214.jpg" width="200px"/>
            </div>
            <div className="col-1"></div>
            <div className="col border border-warning">
              <p>FUNDAMENTOS DE ROBÓTICA</p>
              <h5>Antonio Barrientos Cruz</h5>
                <div className="row">
                    <div className="col-5">
                        <h5>$279.000</h5>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning btn-sm">
                            Unidades disponibles <samp class="badge bg-dark rounded-pill">6</samp>
                        </button>
                    </div>                    
                </div>
                <div className="row mt-3">
                    <div className="col-5">
                        <a href="https://reactjs.org" className="alert-link">Descripción</a>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary">Modificar</button>                       
                    </div>                  
                </div>
                <img class="img-fluid" src="https://thumbs.dreamstime.com/b/tecnolog%C3%ADa-global-logo-template-design-vector-emblema-concepto-de-dise%C3%B1o-s%C3%ADmbolo-creativo-icono-94271214.jpg" width="200px"/>
            </div>
            <div className="col-1"></div>
            <div className="col border border-warning">
              <p>FUNDAMENTOS DE ROBÓTICA</p>
              <h5>Antonio Barrientos Cruz</h5>
                <div className="row">
                    <div className="col-5">
                        <h5>$279.000</h5>
                    </div>
                    <div className="col">
                        <button className="btn btn-warning btn-sm">
                            Unidades disponibles <samp class="badge bg-dark rounded-pill">6</samp>
                        </button>
                    </div>                    
                </div>
                <div className="row mt-3">
                    <div className="col-5">
                        <a href="https://reactjs.org" className="alert-link">Descripción</a>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-primary">Modificar</button>                       
                    </div>                  
                </div>
                <img class="img-fluid" src="https://thumbs.dreamstime.com/b/tecnolog%C3%ADa-global-logo-template-design-vector-emblema-concepto-de-dise%C3%B1o-s%C3%ADmbolo-creativo-icono-94271214.jpg" width="200px"/>
            </div>
            <div className="col-1"></div>
        </div><br></br>
        <div className="row mt-3">
            <div className="col-3"></div>
            <div className="col">
                <a href='./components/ListaVentas.js' className="btn btn-outline-danger">Lista de ventas</a>
            </div>
            <div className="col">
                <a href="#" className="btn btn-outline-danger">Crear producto</a>
            </div>
            <div class="col">
                <a href="#" className="btn btn-outline-danger">Actualizar datos</a>    
            </div>
            <div className="col-3"></div>
        </div><br></br>
        <div className="alert alert-warning">Todos los derechos reservados © TheHackerMark 2022</div>
        <samp className="spinner-grow text-danger"></samp>
    
    </div>
  );
}

export default Administrador;
