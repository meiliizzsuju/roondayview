const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const foodblogRouter = require("./controllers/foodblogs/foodblogRoutes")
const userRouter = require("./controllers/users/userRoutes")

const app = express()

app.use(express.json())

const PORT = 5000

app.get("/", (request, response) => {
    response.json({
        data: "Data send"
    })
})

const corsOption = {
    orgin: ["http:localhost:3000"], 
    optionsSuccessStatus: 200
}

app.use(cors(corsOption))

app.use("/foodblogs", foodblogRouter)
app.use("/users", userRouter)

module.exports = {
    app,
    PORT
}