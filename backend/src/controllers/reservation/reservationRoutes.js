const express = require("express")

const { getReservations, getReservationID } = require("./reservationControllers.js")

const reservationRouter = express.Router()

// This will get all the reservation data
reservationRouter.get("/", (request, response) => {
    // The reservation variable will perform the same function as getReservations()
    const reservations = getFoodblogs()
    // Return the data of reservation will be returned in a json
    response.json(reservations)
})

// This will get a specificreservation data
reservationRouter.get("/:foodblogID", (request, response) => {
    // The variable foodblog will perform the same function getReservationByID().
    const reservation = getFoodblogByID(request.params.foodblogID)
    // If there isn't areservation that has the specific id, return an error message
    if(!reservation){
        response.status(404).json({
            data: "reservation not found"
        })
    }
    // Respond and return thereservation data as a json
    response.json(reservation)
})

module.exports = foodblogRouter
