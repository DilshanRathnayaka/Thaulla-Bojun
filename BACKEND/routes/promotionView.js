const router = require('express').Router();
let Promotion = require('../models/promotionView');

router.route("/").get((req , res)=>{ //route for display all
    
    Promotion.find().then((promotions)=>{
        res.json(promotions);
    }).catch((err)=>{
        console.log(err);
    });

});

module.exports = router;