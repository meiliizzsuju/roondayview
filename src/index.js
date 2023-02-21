const express = require("express")
const foodblogRouter = require("./controllers/foodblogs/foodblogRoutes")

const app = express()

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