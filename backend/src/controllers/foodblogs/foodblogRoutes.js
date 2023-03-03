const express = require("express")

const { getFoodblogs, 
        getFoodblogByID,
        createFoodblog,
        deleteFoodblog  } = require("./foodblogControllers.js")

const foodblogRouter = express.Router()

const auth = require("../../middlewares/auth")

// This will get all the foodblogs data
foodblogRouter.get("/", async (request, response) => {
    // The foodblogs variable will perform the same function as getFoodblogs()
    const foodblogs = await getFoodblogs()
    // Return the data of foodblogs will be returned in a json
    response.json(foodblogs)
})

// This will get a specific foodblog data
foodblogRouter.get("/:foodblogId",  async (request, response) => {
    // The variable foodblog will perform the same function getFoodblogByID().
    const foodblog = await getFoodblogByID(request.params.foodblogId)
    // If there isn't a foodblog that has the specific id, return an error message
    if(!foodblog){
        response.status(404).json({
            data: "food blogs not found"
        })
    }
    // Respond and return the foodblog data as a json
    response.json(foodblog)
})

foodblogRouter.post("/", auth , async (request, response) => {
    const foodblog = createFoodblog({
        title: request.body.title,
        description: request.body.description,
        restaurant: request.body.restaurant,
        price: request.body.price,
        cuisine: request.body.cuisine
    })

    response.json(foodblog)
})

foodblogRouter.delete("/:foodblogId", async (request, response) => {
    const foodblog = await deleteFoodblog(request.params.foodblogId)
    response.json(foodblog)
})

module.exports = foodblogRouter
