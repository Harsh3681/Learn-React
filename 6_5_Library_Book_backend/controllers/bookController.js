const Book = require('../models/book');
const controller = require('../controllers/bookController');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// --------------------------------------------------------------------------------------------------------

const app = express();
app.use(bodyParser.json()); // Parse JSON request bodies

// working below 💯
exports.getAllBooks = async (req, res) => {                     // GetAll Book
  try {
    const books = await Book.find({});          // use Book As database
    res.status(200).json({ success: true, data: books });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};  


// --------------------------------------------------------------------------------------------------------


// Not working below ⚔️
exports.getBookById = async (req, res) => {                // Get Single Book 

  if(req.params.id){
    const id = req.body.id;

    Book.findById(id)
    .then(data => {
      if(!data){
        res.status(404).send({message:"Not found Book with id ${id}"})
      }else{
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({message:"Error in get Book with id ${id}"})
    })
  }else{
    Book.find()
    .then(book => {
      res.send(book);
    })
    .catch(err => {
      res.status(400).send({message:"id is required"})
    })
  }   
};



// --------------------------------------------------------------------------------------------------------


// working below 💯
exports.createBook = async (req, res) => {                // create the book
  
  if(Object.keys(req.body).length === 0){
    res.status(400).send({message:"Contenet Cannot be empty"});
    return;
  }

  // Create a Book
  const book = new Book({
    name: req.body.name,
    image_url: req.body.image_url,
    author: req.body.author,
    pages: req.body.pages,
    price: req.body.price
  })

  // Save Book in the database
  book
    .save(book)
    .then(data => {
      res.send(data);
      res.redirect('/index.html?');
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while creating the Book."
      });
    }); 
};


// --------------------------------------------------------------------------------------------------------


// working below 💯
exports.updateBookById = async (req, res) => {              // Update the book

  if(Object.keys(req.body).length === 0){
    res.status(400).send({message:"Data to be updated  Cannot be empty"});
    return;
  }
  
  const id = req.params.id;
  Book.findByIdAndUpdate(id,req.body, {useFindAndModify:false}) // here we used database name as "Book" dont be confuse
  .then(data => {
    if(!data){
      res.status(404).send({message:"Cannot Update Book with ${id}. Maybe Book not found!"})
    }else{
      res.send(data);
    }
  })
  .catch(err => {
    res.status(500).send({message:"Error Update Book information"})
  });

};

// --------------------------------------------------------------------------------------------------------


// working below 💯
exports.deleteBookById = async (req, res) => {      // delete the book
  const id = req.params.id;
  
  Book.findByIdAndDelete(id)
  .then(data => {
    if(!data){
      res.status(404).send({message:"Cannot Delete Book with ${id}. Maybe Book not found!"})
    }else{
      res.send({
        message:"Book delete Successfully"
      });
    }
  })
  .catch(err =>{
    res.status(500).send({message:"Error in delete Book information"})
  })
};

// --------------------------------------------------------------------------------------------------------