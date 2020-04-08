const mongoose = require('../config/mongoose.js');

const RatingSchema = new mongoose.Schema({
    customer: { type:String, required: true, minlength: 3 },
    rating: { type: Number, required: true, min:1, max:5 },
    content: { type: String, required: true, minlength: 3 }}, { timestamps: true });
    
const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    cuisine: { type: String, required: true, minlength: 3},
    reviews: [RatingSchema]}, { timestamps: true });

const Rating = mongoose.model('Rating', RatingSchema)
module.exports = Rating
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant