const express = require("express")

const { getFoodblogs, getFoodblogByID } = require("./foodblogControllers.js")

const foodblogRouter = express.Router()

// This will get all the foodblogs data
foodblogRouter.get("/", (request, response) => {
    // The foodblogs variable will perform the same function as getFoodblogs()
    const foodblogs = getFoodblogs()
    // Return the data of foodblogs will be returned in a json
    response.json(foodblogs)
})

// This will get a specific foodblog data
foodblogRouter.get("/:foodblogID", (request, response) => {
    // The variable foodblog will perform the same function getFoodblogByID().
    const foodblog = getFoodblogByID(request.params.foodblogID)
    // If there isn't a foodblog that has the specific id, return an error message
    if(!foodblog){
        response.status(404).json({
            data: "food blogs not found"
        })
    }
    // Respond and return the foodblog data as a json
    response.json(foodblog)
})

module.exports = foodblogRouter
