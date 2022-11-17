/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from "react";
//import "./App.css";
//import "../bootstrap.min.css";
import { Link } from 'react-router-dom';
import Logo from "../images/thm.png";
import {
  Table,
  Button,
  //Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import data from "../data/products"
/*const data = [
  { id: 1, producto: "FUNDAMENTOS DE PROGRAMACIÓN", autor: "Luis Joyanes Aguilar", precio: "$547.000", stock: "20" },
  { id: 2, producto: "METODOLOGÍA DE LA PROGRAMACIÓN", autor: "Enrique Gómez Jiménez", precio: "$389.000", stock: "5" },
  { id: 3, producto: "INTRODUCCIÓN A LA PROGRAMACIÓN", autor: "Francisco Charte", precio: "$198.000", stock: "18" },
  { id: 4, producto: "INGENIERÍA DE SOFTWARE", autor: "Ludmila Lis Rinaudo, Guillermo Pantaleo", precio: "$207.000", stock: "14" },
  { id: 5, producto: "FUNDAMENTOS DE ROBÓTICA", autor: "Antonio Barrientos Cruz", precio: "$280.000", stock: "2" },
  { id: 6, producto: "METODOLOGÍA DE LA PROGRAMACIÓN", autor: "Enrique Gómez; Roy Aguilera", precio: "$100.000", stock: "25" },
];*/

class Productos extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      producto: "",
      autor: "",
      precio: "",
      stock: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    // eslint-disable-next-line array-callback-return
    arreglo.map((registro) => {
      // eslint-disable-next-line eqeqeq
      if (dato.id == registro.id) {
        arreglo[contador].producto = dato.producto;
        arreglo[contador].autor = dato.autor;
        arreglo[contador].precio = dato.precio;
        arreglo[contador].stock = dato.stock;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    // eslint-disable-next-line eqeqeq
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-3"></div>
            <div className="col border mt-3"><br></br>
              {/*<img class="img-fluid" src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/314012421_503932268418412_1944509815264465782_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=lOejjEzQbKIAX83FKoe&_nc_ht=scontent-bog1-1.xx&oh=00_AfDmttqjRmldy5hGZdrKGMXXB1QgAhFDFmAc9ZAH9wlpsg&oe=63675BE0" width="200px"/>*/}
              {/* <img src={Logo} alt="Logo" width="150" /> */}
            </div>
            <div className="col border mt-3">
                <img alt="icon" class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TZlVYaV9HbU7MuTYStqtVkbKjQpgUUTu2Q&usqp=CAU" width="80px"/>
                <p>DANILO HERNÁNDEZ <br></br>Administrador</p>
            </div>
            <div className="col border mt-3"><br></br>
            <Button color="primary" onClick={()=>this.mostrarModalInsertar()}>Crear producto</Button>
            <Link to="/listaventas" class="btn btn-outline-danger mt-3">Lista de ventas</Link><br></br>
            </div>       
            <div className="col-3"></div>       
          </div> 

         <div className="row mt-3">
            <div class="col-3"></div>
            <h5>Lista de productos</h5>
            <div class="col-3"></div><br></br>
        </div> 

          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre producto</th>
                <th>Autor</th>
                <th>Precio $</th>
                <th>Stock</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.producto}</td>
                  <td>{dato.autor}</td>
                  <td>{dato.precio}</td>
                  <td>{dato.stock}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div> 

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Autor: 
              </label>
              <input
                className="form-control"
                name="autor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.autor}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Stock: 
              </label>
              <input
                className="form-control"
                name="stock"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.stock}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Autor: 
              </label>
              <input
                className="form-control"
                name="autor"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Stock: 
              </label>
              <input
                className="form-control"
                name="stock"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
{/* 
        <br></br>
        <div className ="alert alert-warning text-center">Todos los derechos reservados © TheHackerMark 2022</div>
 */}
      </>
    );
  }
}
export default Productos;
