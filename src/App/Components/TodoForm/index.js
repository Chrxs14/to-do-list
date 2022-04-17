import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const onChange = (event)=>{
    setNewTodoValue(event.target.value)
  }

  const onCancel = ()=>{
    setOpenModal(false)
  }

  const onAdd = (event)=>{
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return(
    <form className="formAddItem" onSubmit={onAdd}>
      <label className="formTitle">Escribe tu nueva tarea</label>
      <textarea 
        className="formTextArea"
        value={newTodoValue}
        onChange={onChange}
        placeholder="crea tu tarea"
      />
      <div className="formButtons">
        <button
          className="buttonForm buttonForm-cancel"
          onClick={onCancel}
          type='button'
        >
          Cancelar
        </button>
        <button
          className="buttonForm buttonForm-add"
          type='submit'
        >
          Agregar
        </button>
      </div>
    </form>
  )
}

export {TodoForm}