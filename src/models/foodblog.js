const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    user_id: String,
    description: String,
    rating: Number,
})

const FoodblogSchema = new mongoose.Schema({
    title: String,
    description: String,
    theme: String,
    reviews: [ReviewSchema],
})

const Foodblog = mongoose.model("Foodblog", FoodblogSchema)

module.exports = Foodblog