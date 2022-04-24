const router = require('express').Router();
let Shortcoming = require('../models/shortcomingViews');

router.route("/").get((req , res)=>{ //route for display all
    
    Shortcoming.find().then((Shortcomings)=>{
        res.json(Shortcomings);
    }).catch((err)=>{
        console.log(err);
    });

});

module.exports = router;