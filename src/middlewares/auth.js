const jwt = require("jsonwebtoken")

function auth(request, response, next){
    if(!request.payload.is_admin){
        return response.status(401).json({data: "You are not admin"})
    }
    next()
}

module.exports = auth