import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoState: [
        {
          name: "Dishes",
          id: 123,
          completed: false,
        }
      ],
    }
  }

  toggleItem = (clickedOnId) => {
    this.setState({
      toDoState: this.state.toDoState.map((toDo) => {
        if (toDo.id === clickedOnId) {
          return {
            ...toDo,
            completed: !toDo.completed,
          }
        } else {
          return toDo;
        }
      })
    })
  }

  addItem = (toDoName) => {
    const newTodo = {
      name: toDoName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      toDoState: [...this.state.toDoState, newTodo],
    })
  }

  removeItems = () => {
    this.setState({
      toDoState: this.state.toDoState.filter((toDo) => !toDo.completed)
      });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList toggleItem={this.toggleItem} toDoState={this.state.toDoState} removeItems={this.removeItems}/>
      </div>
    );
  }
}

export default App;
