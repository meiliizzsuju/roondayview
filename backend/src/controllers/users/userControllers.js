const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../../models/user")
const Admin = require("../../models/admin")

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

    const token = jwt.sign(payload, process.env.JWT_SECERT)

    return token
}

async function loginUser(user) {
    // Check if the username exist
    const existingUser = await User.findOne({username: user.username})

    if(!existingUser) {
        return {error: "username wrong"}
    }

    const isMatch = await bcrypt.compare(user.password, existingUser.password)
    if (!isMatch){
        return {error: "password wrong"}
    }

    const payload = {
        id: existingUser._id,
    }

    const token = jwt.sign(payload, process.env.JWT_SECERT)

    return token

}

async function loginAdmin(user) {
    const existingUser = await Admin.findOne({username: user.username})

    if(!existingUser) {
        return {error: "username wrong"}
    }

    const isMatch = await bcrypt.compare(user.password, existingUser.password)
    if (!isMatch){
        return {error: "password wrong"}
    }

    const payload = {
        id: existingUser._id,
        is_admin: true
    }

    const token = jwt.sign(payload, process.env.JWT_SECERT)

    return token

}

async function getUsers() {
    const users = await User.find()
    return users
}

async function deleteUser(userId){
    const deleteUser = await User.findByIdAndDelete(userId)
    return deleteUser
}

module.exports = {
    registerUser,
    getUsers,
    loginUser,
    loginAdmin,
    deleteUser
}