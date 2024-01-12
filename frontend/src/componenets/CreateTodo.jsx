import { useState } from 'react'
import  './CreateTodo.css'
export function CreatTodo(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    return <div>
        <input type = "text" placeholder="Title " onChange={function(e){
            const value=e.target.value
            setTitle(value)
        }}></input> <br></br>
        <input type = "text" placeholder="description" onChange={function(e){
            const value=e.target.value
            setDescription(value)
        }}></input> <br></br>
        <button onClick={function(){
            fetch("http://localhost:3000/add_todo",{
                method : "POST",
                body :  JSON.stringify({
                    title : title,
                    description : description
                }),
                    headers : {
                        "Content-type" :"application/json"
                    }
                
            }).then(async function(res){
                const final = await res.json()
                alert("todo added")
            })
        }}>Add Todo</button>
    </div>
}