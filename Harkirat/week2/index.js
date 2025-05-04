// Here we try to create an todo least backend just use all curd operation, 
// GET, POST, PUT, DELETE.


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { title } = require('process');


const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let todoArray = [];

app.post("/todos", (req, res) => {
    const todo = {
        id : Math.floor(Math.random() * 1000),
        title : req.body.title,
        description : req.body.description,
    }
    todoArray.push(todo);
    console.log("Todo created:", todo);
    res.status(201).json({ message: "Todo created", todo });
});

app.get("/todos", (req, res) => {
    res.status(200).json(todoArray);
});

app.put("/todos/:id",(req, res) => {
    

})

app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodos = todoArray.filter(todo => todo.id !== id);
    todoArray = updatedTodos;
    console.log(`Todo with id ${id} deleted`);
    res.status(200).json({ message: `Todo with id ${id} deleted` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Export the app for testing