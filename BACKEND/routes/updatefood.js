const router = require('express').Router();

let User = require('../models/updatefood');

router.route('/add').post( (req, res) => {
    const foodname = req.body.foodname;
    const status = req.body.status;
    
    

    const newUserData = {
        foodname,
        status,
        
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