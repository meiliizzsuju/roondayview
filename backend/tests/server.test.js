const request = require("supertest")
const mongoose = require("mongoose")
const { app } = require("../src/server")

let token;

beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/roondayview")

    const response = await request(app).post("/admin/login").send({
        username: "admin",
        password: "password"
    })
    token = response.body.token
})

afterAll(async () => {
    await mongoose.connection.close()
})

// 1
describe("Server homepage", () => {
    it("shows data sent message", async () => {
        const response = await request(app).get("/")
        //assertion
        expect(response.statusCode).toBe(200)
        expect(response.body.data).toBe("Data Send")
    })
})



