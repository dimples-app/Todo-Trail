import React, {useState} from 'react'


function TodoForm({handleSubmit, handleChange, value, setValue}) {
    return (
        <form handleSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add Task"
                value={value}
                name="text"
                className="todo-input"
                onChange={handleChange}
            />

            <button className="todo-add-button">Add</button>
            
        </form>
    )
}

export default TodoForm
