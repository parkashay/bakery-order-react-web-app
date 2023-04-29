const express = require('express');
const Order = require('../models/orderModel');
const router = express.Router();

router.put('/completeorder', async (req, res) => {
    const customerName = req.body.customerName;
    const customerPhone = req.body.customerPhone;
    const date = req.body.date;
    const completed = req.body.completed;
    try {
        await Order.updateOne({
            customerName: customerName,
            customerPhone: customerPhone,
            date: date
        }, { completed: completed });

    } catch (err) {
        console.error(err);
        res.send({ success: false })
    }
    res.send({ success: true })
})

module.exports = router;