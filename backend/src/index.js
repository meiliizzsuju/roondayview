const mongoose = require("mongoose")
const { app, PORT } = require("./server")

// Connect to the mongoose database
app.listen(PORT, () => {
    console.log("Server Started")
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log("Database connected")
    })
})
