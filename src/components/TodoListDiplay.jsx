import React from 'react';
import { AiOutlineCheck,AiOutlineClose  } from "react-icons/ai";
const TodoListDiplay = ({todoList,setTodoList}) => {
    function updateTask(id){
        let arr =[];
        for(let t of todoList){
            if(t.id === id){
                t.completed =!t.completed;
            }
            arr.push(t);

        }
        setTodoList(arr);
    }

    return (
        <div>
           {
            todoList.length ? todoList.map(task=> (
                <ul key={task.id}  onClick={() => updateTask(task.id)}>
                    <li>{task.title}
                    {
                      task.completed ? <AiOutlineCheck /> : <AiOutlineClose /> 
                    }
                    </li>
                </ul>
            )):
            <h2>No Tasks</h2>

            
           }
        </div>
    );
};

export default TodoListDiplay;


