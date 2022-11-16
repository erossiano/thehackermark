import React from 'react';
import Logo from "../images/thm.png";
function ListaVentas() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
          <div className="col-3"></div>
          <div className="col border mt-3"><br></br>
            {/*<img class="img-fluid" src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/314012421_503932268418412_1944509815264465782_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=lOejjEzQbKIAX83FKoe&_nc_ht=scontent-bog1-1.xx&oh=00_AfDmttqjRmldy5hGZdrKGMXXB1QgAhFDFmAc9ZAH9wlpsg&oe=63675BE0" width="200px"/>*/}
            <img src={Logo} alt="Logo" width="150" />
          </div>
          <div className="col border mt-3">
              <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TZlVYaV9HbU7MuTYStqtVkbKjQpgUUTu2Q&usqp=CAU" width="80px"/>
              <p>DANILO HERNÁNDEZ <br></br>Administrador</p>
          </div>       
          <div className="col-3"></div>       
      </div>

        <div className="row mt-3">
            <div class="col-3"></div>
            <h5>Lista de ventas</h5>
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
        </div><br></br>
       
        <div className="alert alert-warning">Todos los derechos reservados © TheHackerMark 2022</div>
        <samp className="spinner-grow text-danger"></samp>
    </div>
  );
}

export default ListaVentas;
