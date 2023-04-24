const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price : Number,
  review : String
});

module.exports = mongoose.model('Item', itemSchema); 
//giving 'Item' as the first parameter will check for the 
//items collection and if there is none, it will create one


//This is the basic syntax for declaring schemas in mongoose. 