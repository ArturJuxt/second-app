import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../../redux";
import uuid from "uuid/v4";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = useCallback((todo) => dispatch(addTodoAction(todo)), [
    dispatch,
  ]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") return;

    addTodo({
      id: uuid(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
