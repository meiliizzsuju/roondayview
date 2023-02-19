const express = require("express")

const foodblogRouter = express.Router()

foodblogRouter.get("/", (request, response) => {
    response.json(foodblogs)
})

foodblogRouter.get("/:foodblogID", (request, response) => {
    const foodblog = foodblogs(request.params.foodblogID)
    if(!foodblog){
        response.status(404).json({
            data: "food blogs not found"
        })
    }
    return foodblog
})

module.exports = foodblogRouter
    