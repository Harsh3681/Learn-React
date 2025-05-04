import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json()); // For parsing application/json

// __dirname is not available in ES modules, so we need to recreate it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route to handle todo submission
app.post('/api/todo', (req, res) => {
    const { title, description } = req.body;

    const newTodo = {
        title,
        description,
    };

    const filePath = path.join(__dirname, 'Todo.json');

    // Read existing todos from the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading Todo.json:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        let todos = [];
        if (data) {
            todos = JSON.parse(data);
        }

        // Add the new todo
        todos.push(newTodo);

        // Write the updated todos back to the file
        fs.writeFile(filePath, JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                console.error('Error writing to Todo.json:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            res.status(200).json({ message: 'Todo saved successfully!' });
        });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
