const express = require("express")

const { registerUser,
        getUsers } = require("./userControllers")

const userRouter = express.Router()

userRouter.post("/register", async (request, response) => {
    const token = await registerUser({
        name: request.body.name,
        username: request.body.username,
        password: request.body.password
    })

    if (token.error) {
       return response.staus(400).json({ data: token.error})
    }

    response.json(token)
})

userRouter.get("/", async (request, response) => {
    const users = await getUsers()
    response.json(users)
})

module.exports = userRouter