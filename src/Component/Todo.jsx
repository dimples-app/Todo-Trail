import React, {useState, useEffect} from 'react'
import logo from "../Assets/todo1.png"

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist")
    if(lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}
function Todo() {
    const [input, setInputdata] = useState();
    const [items, setItems] = useState(getLocalData());
    const [editItem, setEditItem] = useState("");
    const [toggle, isToggle] = useState(false);

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items])

    const handleChange = (event) => {
        setInputdata(event.target.value)
    }

    //Add items
    const addItems = () => {
        // return in case of no input
        if(!input)  {
            return alert("Please enter items in list")
        } else {
            const newInput =  {
                id: new Date().getTime().toString(),
                name: input,
            }
        
        // add to add
        // const arr = []
        // setItems( [...items, arr.push(input)])
        setItems( [...items, newInput])
        setInputdata("")
        }
    }

    //delete item

    const handleDeleteItem = (id) => {
        console.log(id);
      const itemsAfterDelete = items.filter((item, index) => {
          return index !== id;
      })
       setItems(itemsAfterDelete)
    }

    // handle edit 

    const handleEditItem = (id) => {
        const itemToEdit = items.find((item, index) => {
            return index === id;
        })
        setInputdata(itemToEdit)
        setEditItem(id)
    }

    //Remove All Items

    const removeAllItems = () => {
        setItems([])
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    
                    <figure>
                        <img src= {logo} alt="Logoimage" />
                        <figcaption>
                            Add your list here
                        </figcaption>
                    </figure>
                    <div className="addItems">
                            <input 
                            type="text" 
                            placeholder="Add Items..." 
                            value={input}
                            onChange={handleChange}
                            />
                            <i class="fa fa-plus add-btn" title="add item" onClick={addItems}></i> 
                    </div>
                    <div className="showItems">
                        {
                            items.map((item, index) => (
                                <div className="eachItem" key={index}>
                                    <h3>{item.name}</h3>
                                    <i className="fa fa-edit add-btn" title="Edit item" onClick={() => handleEditItem(index)}></i>
                                    <i className="fa fa-trash add-btn" title="Delete item" onClick={() => handleDeleteItem(index)}></i> 
                                </div>
                            ))
                        }
                        
                    </div>


                    <div className="showitems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAllItems}>  <span> Check List</span></button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Todo
