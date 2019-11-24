const express = require("express");
const router = express.Router();
const Property = require("../model/property.model");

router.post('/', (req, res, next) => {
    let filterLocation = [];
    let filterOfferType = [];
    filterLocation.push({"location.street": { $regex:req.body.searchTxt , $options:'i'} });
    filterLocation.push({"location.district": { $regex:req.body.searchTxt , $options:'i'} });
    filterLocation.push({"location.city": { $regex:req.body.searchTxt , $options:'i'} });
    filterLocation.push({"location.state": { $regex:req.body.searchTxt , $options:'i'}});
    filterLocation.push({"location.country": { $regex:req.body.searchTxt , $options:'i'}});
    filterLocation.push({"location.latitude": { $regex:req.body.searchTxt , $options:'i'}});

   if (req.body.buy) {
       filterOfferType.push({"offer_type": "Sell"})
   }
   if (req.body.rent) {
       filterOfferType.push({"offer_type": "Rent"})
   }

   Property.find()
            .and([
                { $or: filterLocation },
                { $or: filterOfferType}
            ]).exec((err, properties) => {
                if(!err){
                    res.json(properties);
                }else {
                    res.json({"msg": err});
                }
    });
});
module.exports = router; 