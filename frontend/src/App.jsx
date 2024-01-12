import { useState } from 'react'
import './App.css'
import React from 'react'
import { CreatTodo } from './componenets/CreateTodo'
import { Todos } from './componenets/todos'


 function App() {
  const [todos,setTodos] = useState([])
  //Problem is infinite request is going out  -- useEffect Hook
  fetch("http://localhost:3000/existing_todos").then(async function(response){
  const final = await response.json()       
  setTodos(final.todos)
})
  // console.log(final.todos)
  
  return (
    <div>
        <h1>TODO</h1>
        <CreatTodo></CreatTodo>
        <Todos todo = {todos}></Todos>
    </div>
  )
}

export default App


