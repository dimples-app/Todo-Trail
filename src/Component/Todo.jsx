import React from 'react'
import logo from "../Assets/todo1.png"
function todo() {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src= {logo} alt="Logoimage" />
                        <figcaption>
                            Add your list here
                        </figcaption>

                        <div className="add-item">
                            <input type="text" placeholder="Add Items..." />
                            <i class="fa fa-plus add-btn" title="add item"></i> 
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default todo
