const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://abhijeetjha913:IsO4C28Lk8nYGtzT@abhijitjha.abiny0p.mongodb.net/TODO_APP")
const todoSchema = new mongoose.Schema({
    title : String,
    description : String,   
    completed : Boolean
})
const todoList = mongoose.model("TODOS",todoSchema)

module.exports ={
    todoList
}