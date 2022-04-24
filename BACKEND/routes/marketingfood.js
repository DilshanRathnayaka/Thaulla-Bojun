const router = require('express').Router();

let Customer = require('../models/marketingfood');


router.route('/add').post( (req, res) => {
    const foodItemName = req.body.foodItemName;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
    const ingredience = req.body.ingredience;
    const procedure = req.body.procedure;

    const newFoodData = {
        foodItemName,
        quantity,
        price,
        ingredience,
        procedure,
    }

    const newFood = new Customer(newFoodData);

    newFood.save()
           .then(() => res.json('New Food Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});
//
router.route("/").get((req , res)=>{ //route for display all
    
    Customer.find().then((customers)=>{
        res.json(customers);
    }).catch((err)=>{
        console.log(err);
    });

});


module.exports = router;