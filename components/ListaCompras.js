import React from 'react';
function ListaCompras() {
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
            <h5>Lista de compras anteriores</h5>
            <div class="col-3"></div><br></br>
        </div>

        <div class="row mt-3 ">
            <div class="col-1"></div>
            <div class="col border border-warning">
              <div>
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Título</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Valor</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr>
                        <th scope="row">1</th>
                        <td>Hacking Hardware y Firmware</td>
                        <td>1</td>
                        <td>$279.000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Todo el Mundo Debería Saber Programar</td>
                        <td>2</td>
                        <td>$558.000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Fundamentos de robótica</td>
                        <td>1</td>
                        <td>$279.000</td>
                      </tr>
                    </tbody>
                  </table>
               </div>
            </div>
            <div class="col-1"></div>
        </div>
   
        <div class="row mt-3">
            <div class="col-3"></div>
            <div class="col">
              <a href="./cliente.html" class="btn btn-outline-danger">Lista de productos</a> 
            </div>
            <div class="col">
              <a href="#" class="btn btn-outline-danger">Actualizar datos</a>  
            </div>
            <div class="col-3"></div>
        </div><br></br>
        <div className="alert alert-warning">Todos los derechos reservados © TheHackerMark 2022</div>
        <samp className="spinner-grow text-danger"></samp>
    </div>
  );
}

export default ListaCompras;