import React from 'react';
function Cliente() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
          <div className="col-3"></div>
          <div className="col border mt-3">
              <img class="img-fluid" src="https://thumbs.dreamstime.com/b/tecnolog%C3%ADa-global-logo-template-design-vector-emblema-concepto-de-dise%C3%B1o-s%C3%ADmbolo-creativo-icono-94271214.jpg" width="200px"/>
          </div>
          <div className="col border mt-3">
              <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TZlVYaV9HbU7MuTYStqtVkbKjQpgUUTu2Q&usqp=CAU" width="80px"/>
              <p>AMY MONTENEGRO <br></br>Cliente</p>
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
                        <button className="btn btn-outline-primary">Comprar</button>                       
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
                        <button className="btn btn-outline-primary">Comprar</button>                       
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
                        <button className="btn btn-outline-primary">Comprar</button>                       
                    </div>                  
                </div>
                <img class="img-fluid" src="https://thumbs.dreamstime.com/b/tecnolog%C3%ADa-global-logo-template-design-vector-emblema-concepto-de-dise%C3%B1o-s%C3%ADmbolo-creativo-icono-94271214.jpg" width="200px"/>
            </div>
            <div className="col-1"></div>
        </div><br></br>
        <div className="row mt-3">
            <div className="col-3"></div>
            <div className="col">
                <a href='./components/ListaVentas.js' className="btn btn-outline-danger">Resumen de la compra</a>
            </div>
            <div className="col">
                <a href="#" className="btn btn-outline-danger">Compras anteriores</a>
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

export default Cliente;
