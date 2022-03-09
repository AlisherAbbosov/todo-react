import Buttons from "../TodoButtons/TodoButtons";
import PropTypes from "prop-types";
import "./TodoItem.scss";

function TodoItem({ children, todo, checkTodo, deleteTodo }) {
  return (
    <li className={`todo__item ${todo.isCompleted ? "complated" : ""}`}>
      <span>{children}</span>
      <div className="todo__buttons-box">
        <input
          type="checkbox"
          className="todo__checkbox"
          data-todo-id={todo.id}
          onClick={checkTodo}
          defaultChecked={todo.isCompleted}
          // checked={todo.isCompleted ? true : false}
        />
        <button
          className="buttons delete-btn"
          data-todo-id={todo.id}
          onClick={deleteTodo}
        >
          Delete
        </button>
        {/* <Buttons
          text="Delete"
          variant="delete-btn"
          data-todo-id={todo.id}
          onClick={deleteTodo}
        /> */}
      </div>
    </li>
  );
}

Buttons.proptypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Buttons.defaultProps = {
  text: "Delete",
  // variant: "delete-btn",
};

export default TodoItem;
