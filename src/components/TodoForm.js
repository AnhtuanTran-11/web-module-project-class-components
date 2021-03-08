import React from "react";

class TodoForm extends React.Component {
  // Constructor with state to manage the form
  constructor() {
    super();
    this.state = {
      toDoText: "",
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    // call a function from App to update state
    this.props.addItem(this.state.toDoText);
    this.setState({
      toDoText: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="toDoText"
          value={this.state.toDoText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;