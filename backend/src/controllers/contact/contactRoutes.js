const express = require("express")

// Get all the functions from the contactController
const {
    createContactPost,
    getContactPost
} = require("./contactController.js")

const contactRouter = express.Router()

// Middleware that prevents the user to access certain http methods
const auth = require("../../middlewares/auth")
const admin = require("../../middlewares/admin")

// Post a message through the http method post. This is only accessed if your logged in.
contactRouter.post("/", auth, async (request, response) => {
    const contactPost = createContactPost({
        name: request.body.name,
        message: request.body.message
    })
    // respond the contactPost as Json.
    response.json(contactPost)
})

// Get all the contact and can only be accessed through the admin. The http method get is used.
contactRouter.get("/", admin ,async (request, response) => {
    const contactPost = await getContactPost()
    response.json(contactPost)
})

module.exports = contactRouter