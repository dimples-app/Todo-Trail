import React, {useState} from 'react'
import TodoList from './TodoList'
import './Todo.css'

function Todo() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setValue("")
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }


    return (
        <div className="app-background ">
           
            <div>To-Do Trail</div>
         
            <div className="task-container">
                <TodoList />
            </div>
          
        </div>
    )
}

export default Todo
