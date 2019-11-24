const express = require("express");
const router = express.Router();
const Property = require("../model/property.model");

router.get('/', (req, res, next) => {
    Property.find(req.body, (err, properties) => {
        if(!err){
            res.json(properties);
        }
    })
});
module.exports = router; 