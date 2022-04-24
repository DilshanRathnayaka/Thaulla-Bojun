const router = require('express').Router();

let User = require('../models/shortcomings');



router.route('/add').post( (req, res) => {
    const scid = req.body.scid;
    const scitem = req.body.scitem;
    const itemid = req.body.itemid;
    const qty = req.body.qty;
    const reqdate = req.body.reqdate;
    

    const newUserData = {
        scid,
        scitem,
        itemid,
        qty,
        reqdate,
        
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