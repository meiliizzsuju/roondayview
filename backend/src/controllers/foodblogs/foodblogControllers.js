const Foodblog = require("../../models/foodblog")

// Get all food blogs in the database
async function getFoodblogs () {
    const foodblogs = await Foodblog.find()
    return foodblogs
}

// Get a specific food blog in the database based on the ID
async function getFoodblogByID (foodblogId) {
    try{
        const foodblog = await Foodblog.findById(foodblogId)
        return foodblog
    } catch(err){
        // Catch error and return them to the console
        console.log(err)
    }
}


// Insert the foodblog into the database and return that created floodblog
async function createFoodblog(foodblog) {
    const newFoodblog = await Foodblog.create(foodblog)

    return newFoodblog
}

async function deleteFoodblog(foodblogId){
    const deletedFoodblog = await Foodblog.findByIdAndDelete(foodblogId)
    return deletedFoodblog
}


module.exports = {
    getFoodblogs,
    getFoodblogByID,
    createFoodblog,
    deleteFoodblog
}

