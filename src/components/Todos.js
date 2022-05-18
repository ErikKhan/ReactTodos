import React from 'react'
import {TodoItem} from "./TodoItem";

//Using myStyle to add CSS
export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">My Todos List</h3>
            {/* Using Map Function to display all the Todos */}
            {props.todos.length===0? "Enter Todos to display":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
