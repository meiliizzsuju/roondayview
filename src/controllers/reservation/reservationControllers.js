const reservations = [
    {
        user_id: 1,
        foodblog: [
            {
                title: "Chartime",
                description: "Good amazing korean food",
                price_range: 20,
            }
        ],

        user_id: 2,
        foodblog: [
            {
                title: "Chartasdasdme",
                description: "Goodsad food",
                price_range: 10,
            }
        ]

    }
]

function getReservations() {
    // Get all reservations from database
    return reservations
}

function getReservationByID(reservationID) {
    // Get the reservation from the database with id 'reservationID'
    const reservation = reservations[reservationID]
}

function getReservationByUserID(userID) {
    // Get the reservation from the database with id 'userID'
    const reservationByUserID = reservations.find((reservation) => reservation.user_id == userID)
    return reservationByUserID
}

module.export = {
    getReservations,
    getReservationByID
}