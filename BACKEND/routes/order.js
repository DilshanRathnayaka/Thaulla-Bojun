const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let User = require('../models/order');

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

router.route('/add').post ( (req, res) => {
    const complaintId = req.body.complaintId ;
    const complaintType= req.body.complaintType;
    const description = req.body.description;
    const complaintEmail = req.body.complaintEmail;
    

    const newComplaintData = {
        complaintId,
        complaintType,
        description,
        complaintEmail
    }

    const newComplaint = new User(newComplaintData);

    newComplaint.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;