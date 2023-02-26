const bcrypt = require("bcrypt")

const User = require("../../models/user")

async function registerUser(user) {
    const existingUser = await User.findOne({username: user.username})
    if(existingUser) {
        return { error: "User already exist" }
    }


}

module.exports = {
    registerUser
}