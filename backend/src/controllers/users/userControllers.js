const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Get all the models information
const User = require("../../models/user")
const Admin = require("../../models/admin")

// This allows for the user to register
async function registerUser(user) {
    const existingUser = await User.findOne({username: user.username})
    if(existingUser) {
        return { error: "User already exist" }
    }
    const hashedPassword = await bcrypt.hash(user.password, 10)
    // Create the user inside the database
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

// This functions allows the users to login
async function loginUser(user) {
    // Check if the username exist
    const existingUser = await User.findOne({username: user.username})
    // If the username doesn't exist, block login
    if(!existingUser) {
        return {error: "username wrong"}
    }
    // If the password is inocrrect, block login
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

// This functions allows the user to login into admin
async function loginAdmin(user) {
    const existingUser = await Admin.findOne({username: user.username})
    // Check if the username exist
    if(!existingUser) {
        return {error: "username wrong"}
    }
    // If the username doesn't exist, block login
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

// This functions allows to get all the users inside the database
async function getUsers() {
    const users = await User.find()
    return users
}

// This functions allows the user to delete a specific user
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