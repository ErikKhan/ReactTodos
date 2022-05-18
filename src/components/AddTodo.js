import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    //Using useState to set Title
    const [title, setTitle] = useState("");
   

    //Preventing the Default behaviour of submit button
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title cannot be blank");
        }
        else {
            addTodo(title);
            setTitle("");
            
        }
    }
    return (
        <div className="container my-3">
            <h3>React - ToDo Lists</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                   
                    <input type="text"  placeholder="Enter the Todos" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add a Todo</button>
            </form>
        </div>
    )
}
