import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
.toDo.completed {
  text-decoration: line-through;
}
`

const Todo = (props) => {
  return (
    <StyledDiv>
    <div
      // pass in the item's id
      onClick={() => props.toggleItem(props.toDo.id)}
      className={`toDo${props.toDo.completed ? " completed" : ""}`}
    >
      <p>{props.toDo.name}</p>
    </div>
    </StyledDiv>
  );
};

export default Todo;
