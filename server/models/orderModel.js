const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customerName: {
        type : String,
        required : true
    },
    customerAddress: {
        type : String,
        required : true
    },
    customerPhone: {
        type : Number,
        required : true
    },
    order: {
        itemName: String,
        quantity: Number,
        price: Number
    },
    date : {
        type : Date,
        default : Date.now
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Order', orderSchema);
//giving 'Item' as the first parameter will check for the 
//items collection and if there is none, it will create one


//This is the basic syntax for declaring schemas in mongoose. 