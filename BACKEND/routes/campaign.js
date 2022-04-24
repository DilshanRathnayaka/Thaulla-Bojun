const router = require('express').Router();
let path = require('path');
let Customer = require('../models/campaign.js');


const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

router.route('/add').post ( (req, res) => {
    const campaignName = req.body.campaignName;
    const campaignType = req.body.campaignType;
    const estimatedCost = Number(req.body.estimatedCost);
    const  timing = req.body. timing;


    const newCampaignData = {
        campaignName,
        campaignType,
        estimatedCost,
        discountRate,
        timing,
    }

    const newCampaign = new Customer(newCampaignData);

    newCampaign.save()
           .then(() => res.json('Campaign Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;