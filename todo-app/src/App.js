import React, {Component} from "react";

const todoItems = [
  {
    id: 1,
    title: "Primera entrada",
    description: "DEscripción de la primera entrada",
    completed: false
  }, {
    id: 2,
    title: "Segunda entrada",
    description: "Descripción de la segunda entrada",
    completed: false
  }, {
    id: 2,
    title: "Tercera entrada",
    description: "Descripción de la segunda entrada",
    completed: true
  }, {
    id: 2,
    title: "Cuarta entrada",
    description: "Descripción de la segunda entrada",
    completed: true
  }, {
    id: 2,
    title: "Quinta entrada",
    description: "Descripción de la segunda entrada",
    completed: false
  }, {
    id: 2,
    title: "Sexta entrada",
    description: "Descripción de la segunda entrada",
    completed: true
  }, {
    id: 2,
    title: "Séptima entrada",
    description: "Descripción de la segunda entrada",
    completed: true
  }, {
    id: 2,
    title: "Octava entrada",
    description: "Descripción de la segunda entrada",
    completed: false
  }
];

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems
    };
  }
  
  displayCompleted = (status) => {
    this.setState({viewCompleted: status});
  }
  
  // Selección de tareas completas o incompletas
  renderSelector = () => {
    return (
      <div className="todo-selector">
      <span
      className="button"
      onClick={() => this.setState({viewCompleted: true})}
      >
      COMPLETAS
      </span>
      <span className="button"
      onClick={() => this.setState({viewCompleted: false})}
      >
      INCOMPLETAS
      </span>
      
      </div>)
      
    }
    
    renderItems = () => {
      const items = this.state.todoList.filter(
        item => item.completed == this.state.viewCompleted
        );
        return items.map(item => 
          (
            <li className="todo-item">
            <span className="todo-item-title">{item.title}</span>
            <span className="todo-item-description">{item.description}</span>
            <span className="todo-item-actions">
              <button>EDITAR</button>
              <button>BORRAR</button>
            </span>
            </li>
            )
            )
          };
          
          
          
          render () {
            return (
              <main className="app-container">
              <h1>Mi lista de tareas:</h1>
              <div className="todo-container">
              <div className="todo-selector">
              {this.renderSelector()}
              </div>
              <ul className="todo-list-container">
              {this.renderItems()}
              </ul>
              
              </div>  
              </main>
              
              )
            }
          }
          
          export default App;
          