const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    location: {
        house_number: { type: Number },
        street: { type: String },
        district: { type: String },
        state: { type: String },
        country: { type: String },
        latitude: { type: String },
        longitude: { type: String },
        pincode: { type: Number}
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    available_date: { type: Date, required: true },
    available_till: { type: Date },
    area: {
        built: { type: Number },
        carpet: { type: Number }
    },
    pictures:{ type: [String] },
    no_of_rooms: { type: Number },
    pet_friendly: { type: Boolean },
    smoking: { type: Boolean },
    offer_type: { 
        type: String,
        enum: ['Sell', 'Rent']
    },
    property_type: {
        type: String,
        enum: ['room','house','flat','share_flat']
    }
});

const Property = module.exports = mongoose.model('Property', propertySchema);