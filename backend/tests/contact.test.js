const request = require("supertest")
const mongoose = require("mongoose")
const { app } = require("../src/server")

let token;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI)

    const response = await request(app).post("/users/admin/login").send({
        username: "admin",
        password: "password"
    })
    token = response.body.token


})

afterAll(async () => {
    await mongoose.connection.close()
})

// 4.a get all contact comment
describe("Get all contact", () => {
    it("gets a list of foodblogs", async () => {
        const response = await request(app).get("/contact")
        .set({ Authorization: `Bearer ${token}` })
        expect(response.statusCode).toBe(200)
    })
})


// 4.b the user can post into the contact form
describe("Message to the admin through the contact page", () => {
    it("can send a contact form", async () => {
        const response = await request(app).post("/contact")
        .set({ Authorization: `Bearer ${token}` })
        .send({
            name: "Tommy",
            message: "I have an error in the page"
        })
        expect(response.statusCode).toBe(200)
    })
})