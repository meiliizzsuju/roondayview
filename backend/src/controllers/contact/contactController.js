const Contact = require("../../models/contact")

// This function allows the user to create a contact post inside the database.
async function createContactPost (contactPost){
    const newContactPost = await Contact.create(contactPost)
    return newContactPost
}

// This functions allows the user to see all the contact post inside the database.
async function getContactPost (){
    const contactPosts = await Contact.find()
    return contactPosts
}

module.exports = {
    createContactPost,
    getContactPost
}