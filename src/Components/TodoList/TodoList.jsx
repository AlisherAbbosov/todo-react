import "./TodoList.scss";
import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import NoFound from "../NoFound/NoFound";

function TodoList() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [type, setType] = React.useState(
    window.localStorage.getItem("type") || "all"
  );

  // render todo with ID
  const getTodoById = (_type, _todos) => {
    if (_type === "all") {
      return _todos;
    }

    if (type === "completed") {
      return _todos.filter(todo => todo.isCompleted);
    }

    if (_type === "uncomleted") {
      return _todos.filter(todo => !todo.isCompleted);
    }
  };

  // item's handles
  const handleDelete = evt => {
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter(todo => todo.id !== todoId);

    window.localStorage.setItem("todos", JSON.stringify(filteredTodos));

    if (filteredTodos.length === 0) {
      window.localStorage.removeItem("todos");
    }
    setTodos(filteredTodos);
  };

  const handkeCheck = evt => {
    const todoId = evt.target.dataset.todoId - 0;

    const fountTodo = todos.find(todo => todo.id === todoId);

    fountTodo.isCompleted = !fountTodo.isCompleted;

    window.localStorage.setItem("todos", JSON.stringify([...todos]));

    setTodos([...todos]);
  };

  // add type to local
  const setTypeToLocal = _type => {
    window.localStorage.setItem("type", _type);
    setType(_type);
  };

  return (
    <>
      <header className="todo__input-box">
        <input
          type="text"
          className="todo__input"
          placeholder="Wat's on your mind..."
          onKeyUp={evt => {
            if (evt.code === "Enter") {
              const newTodo = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                title: evt.target.value.trim(),
                isCompleted: false,
              };

              window.localStorage.setItem(
                "todos",
                JSON.stringify([...todos, newTodo])
              );

              const newTodos = [...todos, newTodo];

              if (type !== "all") {
                setType("all");
              }

              setTodos(newTodos);

              evt.target.value = null;
            }
          }}
        />
      </header>

      <ul className="todo__list">
        {todos.length == 0 ? (
          <NoFound />
        ) : (
          getTodoById(type, todos).map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={handleDelete}
              checkTodo={handkeCheck}
            >
              {todo.title}
            </TodoItem>
          ))
        )}
      </ul>
      {
        <footer className="buttons__box">
          <button
            className={`buttons ${type === "all" ? "used" : ""}`}
            onClick={() => setTypeToLocal("all")}
          >
            All
          </button>

          <button
            className={`buttons ${type === "completed" ? "used" : ""}`}
            onClick={() => setTypeToLocal("completed")}
          >
            Completed
          </button>

          <button
            className={`buttons ${type === "uncomleted" ? "used" : ""}`}
            onClick={() => setTypeToLocal("uncomleted")}
          >
            Uncompleted
          </button>
        </footer>
      }
    </>
  );
}

export default TodoList;
