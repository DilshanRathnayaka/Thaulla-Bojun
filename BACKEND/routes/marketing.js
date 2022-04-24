const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Customer = require('../models/marketing');

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
    const foodItemName = req.body.foodItemName;
    const quantity = Number(req.body.quantity);
    const description = req.body.description;
    const discountRate = req.body.discountRate;
    const priorPrice = req.body.priorPrice;
    const presentPrice = req.body.presentPrice;
    const photo = req.file.filename;

    const newCustomerData = {
        foodItemName,
        quantity,
        description,
        discountRate,
        priorPrice,
        presentPrice, 
        photo
    }

    const newCustomer = new Customer(newCustomerData);

    newCustomer.save()
           .then(() => res.json('Promotion Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Customer.find().then((customers)=>{
        res.json(customers);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let CustomerID = req.params.id;
    const foodItemName = req.body.foodItemName;
    const quantity = Number(req.body.quantity);
    const description = req.body.description;
    const discountRate = req.body.discountRate;
    const priorPrice = req.body.priorPrice;
    const presentPrice = req.body.presentPrice;
    const photo = req.file.filename;



    const updatePromotion = {

        foodItemName,
        quantity,
        description,
        discountRate,
        priorPrice,
        presentPrice, 
        photo
    };

    await Customer.findByIdAndUpdate(CustomerID , updatePromotion)
    .then(()=>{
        res.status(200).send({status : "Promotion Updated"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let CustomerID = req.params.id;

    await Customer.findByIdAndDelete(CustomerID)
    .then(()=>{

        res.status(200).send({status : "Promotion has successfully deleted"});


    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let CustomerID = req.params.id; 

    await Customer.findById(CustomerID)
    .then((customers)=>{
        res.status(200).send({customers});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;