const Contact = require("../../models/contact")

async function createContactPost (contactPost){
    const newContactPost = await Contact.create(contactPost)
    return newContactPost
}

async function getContactPost (){
    const contactPosts = await Contact.find()
    return contactPosts
}

module.exports = {
    createContactPost,
    getContactPost
}