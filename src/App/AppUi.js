import React from "react";
import { TodoContext } from "../App/Components/TodoContext";
import { TodoCounter } from "../App/Components/TodoCounter";
import { TodoSearch } from "../App/Components/TodoSearch";
import { CreateTodoButton } from "../App/Components/CreateTodoButton";
import { TodoList } from "../App/Components/TodoList";
import { TodoItem } from "../App/Components/TodoItem";
import { Title } from "../App/Components/Title";
import { Modal } from "../App/Components/Modal";
import { TodoForm } from "../App/Components/TodoForm";

function AppUi() {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    selectComplete,
    setSelectComplete,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Title />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error</p>}
        {loading && (
          <div className="skeletonLoading">
            <p className="text">Cargando...</p>
          </div>
        )}
        {!loading && !searchTodos.length && (
          <div className="craeteFirstItem">
            <p className="text">Crea tu primer tarea</p>
          </div>
        )}
        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => {
              completeTodo(todo.text);
            }}
            setSelectComplete={setSelectComplete}
            onDeleted={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUi };
