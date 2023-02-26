const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../../models/user")

async function registerUser(user) {
    const existingUser = await User.findOne({username: user.username})
    if(existingUser) {
        return { error: "User already exist" }
    }
    const hashedPassword = await bcrypt.hash(user.password, 10)
    const userCreated = await User.create({
        name: user.name,
        username: user.username,
        password: hashedPassword
    })

    const payload = {
        id: userCreated._id
    }

    const token = jwt.sign(payload, "secret")

    return token
}

async function getUsers() {
    const users = await User.find()
    return users
}

module.exports = {
    registerUser
}