const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

router.post('/createorder', async (req, res) => {
    try{
        await Order.create({
            customerName : req.body.customerName,
            customerAddress : req.body.customerAddress,
            customerPhone : req.body.customerPhone,
            order : {
                itemName : req.body.name,
                quantity : req.body.cartCount,
                price : req.body.totalPrice
            }
        })
        res.send({ success : true })
    }
    catch(error){
        console.error(error)
        res.send({success : false })
    }
})

module.exports = router;