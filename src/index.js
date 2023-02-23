const express = require("express")
const mongoose = require("mongoose")

const foodblogRouter = require("./controllers/foodblogs/foodblogRoutes")

const app = express()

app.use(express.json())

const PORT = 5000

app.get("/", (request, response) => {
    response.json({
        data: "Data send"
    })
})

app.use("/foodblogs", foodblogRouter)

app.listen(PORT, () => {
    console.log("Server Started")

})

