const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    user_id: String,
    description: String,
    rating: Number,
})

const FoodblogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 8
    },
    description:{
        type: String,
        required: true,
        minLength: 10
    },
    restaurant: {
        type: String,
        required: true,
    }
    ,
    price: {
        type: Number,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,

    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    reviews: [ReviewSchema],
})

const Foodblog = mongoose.model("Foodblog", FoodblogSchema)

module.exports = Foodblog