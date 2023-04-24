const express = require('express');
const cors = require('cors');
const app = express();
const Item = require('./models/itemModel'); //use models for items
const User = require('./models/userModel'); //use models for users
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config(); //initializing dotenv

const port = process.env.REACT_APP_SERVER_PORT;
const mongodbUri = process.env.REACT_APP_DATABASE_URL;
mongoose.connect(mongodbUri, { useNewUrlParser: true })  //mongooseOP
.then(() => {
  console.log("Connected")
})
.catch(err => {
  console.error(err)
})


app.use(cors()); //this is some kind of granting access thingy


//submiting signup form to database



//accessing the items collection
app.get('/items', (req, res) => {
  Item.find().then((items) => {
    res.json(items);
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error getting items');
  });
});

//accessing the users collection
app.get('/users', (req,res) => {
  User.find().then((users) => {
    res.json(users);
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error getting users');
  });
});

// Start the server
app.listen(port, () => {
  console.log('Server started on: http://localhost:' + port);
});