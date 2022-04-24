const router = require('express').Router();
let Delivery = require('../models/deliveryscreen');


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const address = req.body.address;
    const contactNo = req.body.contactNo;
   

    const newDeliveryData = {
        name,
        city,
        address,
        contactNo
    }

    const newDelivery = new Delivery(newDeliveryData);

    newDelivery.save()
           .then(() => res.json('Delivery Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;