const router = require('express').Router();
let Request = require('../models/request');


router.route('/add').post((req, res) => {
    const itemId = Number(req.body.itemId);
    const itemName = req.body.itemName;
    const date = req.body.date;
    const quantity = req.body.quantity;
   

    const newRequestData = {
        itemId,
        itemName,
        date,
        quantity
    }

    const newRequest = new Request(newRequestData);

    newRequest.save()
           .then(() => res.json('Request Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;