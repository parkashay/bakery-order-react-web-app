const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const Item = require('./models/itemModel'); //use models for items
const dotenv = require('dotenv');


dotenv.config(); //initializing dotenv

const port = process.env.REACT_APP_SERVER_PORT  //port number from .env file
const serverUrl = process.env.REACT_APP_SERVER_URL; //server url fron .env
const mongodbUri = process.env.REACT_APP_DATABASE_URL; //database url from .env
const clientUrl = process.env.REACT_APP_CLIENT_URL; //clientside url from .env

mongoose.connect(mongodbUri, { useNewUrlParser: true })  //mongooseOP
.then(() => {
  console.log("Connected")
})
.catch(err => {
  console.error(err)
})

//for sending http requests to frontend
app.use(cors()); 


//for getting data from frontend via http request
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin",clientUrl);
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Acccept");
  next();
})


//for accepting json data in requests and responses
app.use(express.json());


//creating new user through signup form submission
app.use('/api/', require('./routes/createUser'));


//login Verification
app.use('/api/', require('./routes/loginVerification'));

//storing order
app.use('/api/', require('./routes/createOrder'));

//accessing the orders collection
app.use('/api/', require('./routes/getOrders'));

//setting Order complete status
app.use('/api/', require('./routes/completeOrder'));

//accessing the items collection
app.get('/items', (req, res) => {
  Item.find().then((items) => {
    res.json(items);
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error getting items');
  });
});



// Start the server
app.listen(port, () => {
  console.log('Server started on: ' + serverUrl);
});