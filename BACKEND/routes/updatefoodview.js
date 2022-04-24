const router = require('express').Router();

let User = require('../models/updatefoodview');



router.route("/").get((req , res)=>{ //route for display all
    
    User.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    });

});

module.exports = router;