const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    name: String,
    message: {
        type: String,
        required: true},
    datePosted: Date
})

const Contact = mongoose.model("Contact", ContactSchema)

module.exports = Contact

