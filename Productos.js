/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import data from "./data/products"
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
        <Container>
        <br />
          <Button color="primary" onClick={()=>this.mostrarModalInsertar()}>Crear producto</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre producto</th>
                <th>Autor</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acción</th>
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
        </Container>

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
                value={this.state.form.personaje}
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
                value={this.state.form.anime}
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
      </>
    );
  }
}
export default Productos;
