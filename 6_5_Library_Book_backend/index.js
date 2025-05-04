const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config.js')
const port = process.env.PORT || 5000;

// Import routes
// const bookRoutes = require('./NodeProjectIntern/routes/bookRoutes');
const bookRoutes = require('./routes/bookRoutes.js');

// Body Parser Middleware
app.use(express.json());

 
// Book Routes
app.use("/api/book/",bookRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



// mongo

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (e) => console.log(`ERROR: ${e}`));

app.get("/",(req,res) => {
    return res.json("Connected to / ")
})


// app.use('//js', express.static(path.join(__dirname, '/js')))

// postman link http://localhost:5000/api/book/getAll



























