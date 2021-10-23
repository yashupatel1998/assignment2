
let mongoose = require('mongoose');

//create a model class
let businessModel = mongoose.Schema({
    name : String,
	number: Number,
	email: String
}, {
    collection: "contact"
});

module.exports = mongoose.model('contact', businessModel);
// 'business'