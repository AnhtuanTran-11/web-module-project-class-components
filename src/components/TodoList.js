// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.toDoState.map((toDo) => (
        <Todo key={toDo.id} toDo={toDo} toggleItem={props.toggleItem} />
      ))}
      <button onClick={() => props.removeItems()}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
