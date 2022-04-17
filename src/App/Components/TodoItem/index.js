import React from "react";
import './TodoItem.css'

function TodoItem(props){

  return(
    <li className="TodoItem">
      <span 
        className= {`complete ${props.completed && 'complete-check'}`}
        onClick={ props.onCompleted }
      ></span>
      <p 
        className={`${props.completed && 'todoComplete'}`}
        onClick={ props.onCompleted }
      >
        {props.text}
      </p>
      <span 
        className="close"
        onClick={ props.onDeleted }
      >X</span>
    </li>
  )
}

export { TodoItem }