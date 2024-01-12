const express=require("express")
const app=express()
const PORT=3000
const bodyParser=require("body-parser")
const { createTodo , updateTodo } = require("./type")
const { todoList } = require("./db")
app.use(bodyParser.json())
const cors = require("cors")
app.use(cors())

app.get("/existing_todos",async (req,res)=>{
   const todos = await todoList.find()
   res.json({
    todos : todos
   })
})

app.post("/add_todo", async (req,res)=>{
    const input = {
        title : req.body.title,
        description : req.body.description
       }
       const result= createTodo.safeParse(input)
       if(!result.success){
        res.status(403).json({
            message : "Invalid Inputs"
        })
        return
       }else{
          await  todoList.create({
                title : input.title,
                description : input.description,
                completed : false
            })
            res.json({
                message : "Todo is Created"
            })
       }
    
})


app.put("/complete_todo",async (req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(403).json({
            message : "Huh Invalid Inputs"
        })
    }else{
     await todoList.updateOne({
            _id : req.body.id
        },{
            completed : true
        })
        res.json({
            message : "Updated Successfully"
        })
    }
})

app.delete("/delete",async (req,res)=>{
    const id = req.body.id
    const deletedItem = await todoList.findByIdAndDelete(id);
    if (!deletedItem) {
        res.json({
            message: 'Item not found',
        });
    } else {
        console.log("Successfully deleted: " + id);
        res.json({
            message: 'Successfully deleted',
        });
    }
})


app.listen(3000)

