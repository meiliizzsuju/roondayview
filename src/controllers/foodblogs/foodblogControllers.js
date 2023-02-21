const foodblogs = [
    {
        title: "Chartime",
        description: "Good amazing korean food",
        price_range: 20,
    },
    {
        title: "Chartime",
        description: "Good amazing korean food",
        price_range: 20,
    }
]

// Get all food blogs in the database
function getFoodblogs () {
    return foodblogs
}

// Get a specific food blog in the database based on the ID
function getFoodblogByID (foodblogID) {
    const foodblog = foodblogs[foodblogID]
    return foodblog
}

module.exports = {
    getFoodblogs,
    getFoodblogByID
}

