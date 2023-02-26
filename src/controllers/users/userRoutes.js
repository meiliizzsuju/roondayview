const express = require("express")

const { registerUser } = require("./userControllers")

const userRouter = express.Router()

userRouter.post("/register", async (request, response) => {
    const token = await registerUser({
        name: request.body.name,
        username: request.body.username,
        password: request.body.password
    })

    if (token.error) {
        response.staus(400).json({ data: token.error})
    }

    response.json(token)
})

module.exports = userRouter