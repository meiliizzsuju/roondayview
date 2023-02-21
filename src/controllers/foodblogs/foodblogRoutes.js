const express = require("express")

const { getFoodblogs, getFoodblogByID } = require("./foodblogControllers.js")

const foodblogRouter = express.Router()

foodblogRouter.get("/", (request, response) => {
    const foodblogs = getFoodblogs()
    response.json(foodblogs)
})

foodblogRouter.get("/:foodblogID", (request, response) => {
    const foodblog = getFoodblogByID(request.params.foodblogID)
    if(!foodblog){
        response.status(404).json({
            data: "food blogs not found"
        })
    }
    response.json(foodblog)
})

module.exports = foodblogRouter
