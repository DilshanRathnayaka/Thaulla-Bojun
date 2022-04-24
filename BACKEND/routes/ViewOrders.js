const router = require('express').Router();
//let User = require('../models/food');
let User = require('../models/ViewOrders');
 
router.route('/display').post( (req, res) => {
    const orderId = req.body.orderId;
    const category= req.body.category;
    const  itemNumber = req.body.itemNumber;
    const  customerName= req.body.customerName;
    const address = req.body.address;
    const contactNumber= req.body.contactNumber;
    const date= req.body.date;
    const price= req.body.price;
    const quantity= req.body.quantity;

    const newUserData = {
        orderId,
        category,
        itemNumber,
        customerName,
        address,
        contactNumber,
        date,
        price,
        quantity,
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    User.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    });

});
 

module.exports = router;