const express = require("express")

const app = express()

const PORT = 5000

app.get("/", (request, response) => {
    response.json({
        data: "Data send"
    })
})

app.listen(PORT, () => {
    console.log("Server Started")
})