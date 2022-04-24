const router = require('express').Router();
let Complaint = require('../models/complaintView');

router.route("/").get((req , res)=>{ //route for display all
    
    Complaint.find().then((complaints)=>{
        res.json(complaints);
    }).catch((err)=>{
        console.log(err);
    });

});

module.exports = router;