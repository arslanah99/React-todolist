import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {singleTodo: "", storedTodos: [], clearField: ""}
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
    singleTodo: this.state.singleTodo
  })
  this.input.value = ''
}

removeTodo = (event) => {
  this.setState({
    storedTodos: this.state.storedTodos.filter(todo => todo !== event)
  })
}

resetField = () => {
  this.setState({
    field: this.state.clearField
  })
}


  render(){
    let renderTodos = this.state.storedTodos.map((todo, index) => {
      return <li key={index}>{todo}<button onClick={() => {this.removeTodo(todo)}}>Delete</button></li>
    })
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} ref={(input) => this.input = input}></input> 
        <input type="submit" value="Submit"></input>
      </form>
      <ol>{renderTodos}</ol>
    </div>
  );
}
}

export default App;
