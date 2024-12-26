import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Todo = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent form submission

    if (todo.trim()) {
      // Only add a new task if input is not empty
      setTodoList([
        ...todoList,
        {
          id: uuid(),
          title: todo.trim(),
          completed: false,
        },
      ]);
      setTodo(""); // Clear input after adding
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todo} // Controlled input
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Todo;
