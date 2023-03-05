const express = require("express")

// Get all the functions from the userControllers
const { registerUser,
        getUsers,
        loginUser,
        loginAdmin,
        deleteUser } = require("./userControllers")

const userRouter = express.Router()

// The register URL allows the user to login through post http method. The user register through the fields name, username and password.
userRouter.post("/register", async (request, response) => {
    const token = await registerUser({
        name: request.body.name,
        username: request.body.username,
        password: request.body.password
    })
    // If there is a token error, show this error
    if (token.error) {
       return response.status(400).json({ data: token.error})
    }

    return response.json({token})
})

// Get all the users information through a get http method from the users URL.
userRouter.get("/", async (request, response) => {
    const users = await getUsers()
    return response.json(users)
})

// Delete a specific user from the database by inputting the specific user ID through the http method delete.
userRouter.delete("/:userId", async (request, response) => {
    const user = await deleteUser(request.params.userId)
    response.json(user)
})

// Login the user from the data by inputting the values username and password through the http method post.
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
// Login into the admin from the data by inputting the values username and password through the http method post.
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