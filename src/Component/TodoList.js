import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task)  => {
        if (!task.text  )  return
    }
    return (
        <div>
            <TodoForm />
        </div>
    )
}

export default TodoList
