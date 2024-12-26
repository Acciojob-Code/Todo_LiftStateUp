import React, { useState } from 'react';
import Todo from './components/todo';
import TodoListDiplay from './components/TodoListDiplay';



const App = () => {
 
  const [todolist,setTodoList]=useState([]);
  console.log(todolist);
  return (
    <div>
     <Todo todoList={todolist} setTodoList={setTodoList}/>
     <TodoListDiplay todoList={todolist} setTodoList={setTodoList}/>
    </div>
  );
};

export default App;