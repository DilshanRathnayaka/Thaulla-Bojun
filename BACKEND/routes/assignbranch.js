const router = require('express').Router();
let User = require('../models/assignbranch');

router.route('/assign').post( (req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const branchID = req.body.branchID;

    const newUserData = {
        name,
        city,
        branchID,
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

router.route("/get/:id").get(async (req , res)=>{  //search data
    let userID = req.params.id; 

    await User.findById(userID)
    .then((students)=>{
        res.status(200).send({students});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;