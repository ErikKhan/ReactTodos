import './App.css';
import Navbar from "./components/Navbar";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import Alert  from "./components/Alert";
import React, { useState, useEffect } from 'react';


//This is my app
function App() {
//Showing Alert
  const [alert, setAlert] = useState(null)
  //Function for showing ALert
  const showAlert = (message, type) => {
  setAlert({
      msg: message,
      type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
//Using Local storage to save all the Todos
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

//Using filter to delete the todos and also from local storage
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    showAlert("Todo has been Deleted", "danger")
    

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

//Adding all the todos and give an error message its empty
  const addTodo = (title) => {
    console.log("I am adding this todo", title)
    let sno;
    //Some Error Checking
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
     
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    showAlert("Todo has been Added Successfully", "success")
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    //Showing all the components
    <>
    <Navbar /> 
    <Alert alert={alert}/>
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} /> 
    </>
  );
}

export default App;
