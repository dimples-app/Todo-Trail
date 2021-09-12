import React, {useState} from 'react'

function TodoForm(props) {
const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue("")
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

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
