import React, {useState, useEffect} from 'react'
import logo from "../Assets/todo1.png"

//function to get local data
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist")
    if(lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

/**
 * 
 * @returns 
 */
function Todo() {
    const [input, setInput] = useState();
    const [items, setItems] = useState(getLocalData());
    const [editItem, setEditItem] = useState("");
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items])


    //Add items
    const handleAddItems = () => {
        // return in case of no input
        if (!input) {
            alert('please enter todo item/items');
        } else if(input && !toggle) {
            setItems(
                items.map((item) => {
                    if (item.id === editItem) {
                        return { ...item, name: input }
                    }
                    return item;
                })
            )
                 setToggle(true);

                 setInput('');

                 setEditItem(null);
        } else {
            const allInputData = { 
                id: new Date().getTime().toString(), 
                name:input 
            }
            setItems([...items, allInputData]);
            setInput('')
        }
    }

    //delete item

    const handleDeleteItem = (id) => {
        //console.log(id);
      const itemsAfterDelete = items.filter((item, index) => {
          return index !== id;
      })
       setItems(itemsAfterDelete)
    }

    // handle edit 

    const handleEditItem = (id) => {
        let newEditItem = items.find((item) => {
            return item.id === id
        });
        //console.log(newEditItem);

        setToggle(false);

        setInput(newEditItem.name);

        setEditItem(id);

    }

    //Remove All Items

    const handleRemoveAllItems = () => {
        setItems([])
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={logo} alt="todologo" />
                        <figcaption>Add Your Todo List</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder=" Add Items..."
                           value={input} 
                           onChange={(e) => setInput(e.target.value) }
                        />
                        {
                            toggle ? <i className="fa fa-plus add-btn" title="Add Item" onClick={handleAddItems}></i> :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={handleAddItems}></i>
                        }
                       
                    </div>

                    <div className="showItems">
                        
                        {
                            items.map((item) => {
                                return (
                                    <div className="eachItem" key={item.id}>
                                        <h3>{item.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => handleEditItem(item.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => handleDeleteItem(item.id)}></i>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={handleRemoveAllItems}><span> CHECK LIST </span> </button>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Todo
