const request = require("supertest")
const mongoose = require("mongoose")
const { app } = require("../src/server")


// 1 Checking if the server is running
describe("Server homepage", () => {
    it("shows data sent message", async () => {
        const response = await request(app).get("/")
        //assertion
        expect(response.statusCode).toBe(200)
        expect(response.body.data).toBe("Data Send")
    })
})








