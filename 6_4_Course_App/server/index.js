const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));

app.use((req,res,next)=>{
    res.header("Content-Type", "application/json; charset=UTF-8")
    res.header("Access-Control-Allow-Credentials",true)
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
mongoose.connect('mongodb+srv://admin:admin@cluster0.5rzjxal.mongodb.net/CourseApp?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

app.listen(5000, () => console.log('Server running on port 5000'));
