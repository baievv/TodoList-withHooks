import React from "react";

import "./todo-list-item.css";

const TodoListItem=(props)=> {
 
    const { label, onDeleted, onToggleDone, onToggleImportant,done,important } = props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </span>
    );
  }

  export default TodoListItem;
