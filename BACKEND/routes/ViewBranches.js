const router = require('express').Router();
//let User = require('../models/food');
let User = require('../models/ViewBranches');
 


router.route('/add').post( (req, res) => {
    const name = req.body.name;
    const branchID = req.body.branchID;
    const city = req.body.city;
     
    //const photo = req.file.filename;

    
    const newUserData = {
          name,
         branchID,
         city
        //photo
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