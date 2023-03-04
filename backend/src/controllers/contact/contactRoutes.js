const express = require("express")

const {
    createContactPost,
    getContactPost
} = require("./contactController.js")

const contactRouter = express.Router()

const auth = require("../../middlewares/auth")
const admin = require("../../middlewares/admin")

contactRouter.post("/", auth, async (request, response) => {
    const contactPost = createContactPost({
        name: request.body.name,
        message: request.body.message
    })

    response.json(contactPost)
})

contactRouter.get("/", admin ,async (request, response) => {
    const contactPost = await getContactPost()
    response.json(contactPost)
})

module.exports = contactRouter