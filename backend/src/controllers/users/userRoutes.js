const express = require("express")

const { registerUser,
        getUsers,
        loginUser,
        loginAdmin,
        deleteUser } = require("./userControllers")

const userRouter = express.Router()

userRouter.post("/register", async (request, response) => {
    const token = await registerUser({
        name: request.body.name,
        username: request.body.username,
        password: request.body.password
    })

    if (token.error) {
       return response.status(400).json({ data: token.error})
    }

    return response.json({token})
})

userRouter.get("/", async (request, response) => {
    const users = await getUsers()
    return response.json(users)
})

userRouter.delete("/:userId", async (request, response) => {
    const user = await deleteUser(request.params.userId)
    response.json(user)
})

userRouter.post("/login", async(request, response) => {
    const token = await loginUser({
        username: request.body.username,
        password: request.body.password
    })
    if (token.error) {
        return response.status(400).json({ data: token.error })
    }
    return response.json({token})
})

userRouter.post("/admin/login", async (request, response) => {
    const token = await loginAdmin({
        username: request.body.username,
        password: request.body.password
    })
    if (token.error) {
        return response.status(400).json({ data: token.error })
    }
    return response.json({token})
})

module.exports = userRouter