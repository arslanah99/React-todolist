import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {singleTodo: "", storedTodos: []}
  }
  
handleChange = (event) => {
  this.setState({singleTodo: event.target.value})
}

handleSubmit = (event) => {
  let storedTodos = this.state.storedTodos
  let singleTodo = this.state.singleTodo
  storedTodos = storedTodos.push(singleTodo)
  event.preventDefault()
  this.setState({
    singleTodo: ""
  })
}

  render(){
    let renderTodos = this.state.storedTodos.map((todo) => {
      return <li>{todo}<button>Delete</button></li>
    })
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}></input> 
        <input type="submit" value="Submit"></input>
      </form>
      <ul>{renderTodos}</ul>
    </div>
  );
}
}

export default App;
