const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let User = require('../models/request');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './frontend/public/images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('photo'), (req, res) => {
    const itemID = req.body.itemID;
    const itemName = req.body.itemName;
    const date = req.body.date;
    const quantity = Number(req.body.quantity);

    const newUserData = {
        itemID,
        itemName,
        date,
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

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let ID = req.params.id;
    const itemID = req.body.itemID;
    const itemName = req.body.itemName;
    const date = req.body.date;
    const quantity = req.body.quantity;

    const updateSupplier = {itemID , itemName , date , quantity };

    await User.findByIdAndUpdate(ID , updateSupplier)
    .then(()=>{
        res.status(200).send({status : "User Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let userID = req.params.id;

    await User.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status : "User has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
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
