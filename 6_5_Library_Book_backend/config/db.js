const mongoose = require('mongoose');
// const dbUrl = process.env.DB_URL;




async function connect(){
  const db = await mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false
  });
  
  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
  db.once('open', () => {
    console.log('Connected to database!');
  });
  
}
connect()
