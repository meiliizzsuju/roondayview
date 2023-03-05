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

// 3 Checking all user available
describe("Get useers", () => {
    it("Get all users", async () => {
        const response = await request(app).get("/users")
        expect(response.statusCode).toBe(200)
    })
})

describe("Registering to become user", () => {
    it("Register", async () => {
        const response = await request(app).post("/users/register")
        .send({
            name: "Tommy",
            username: "TommyBlueBlack11",
            password: "password",
        })
        expect(response.statusCode).toBe(200)
    })
})

describe("Login admin", () => {
    it("Login to user" , async () => {
        const response = await request(app).post("/users/admin/login")
        .send({
            username: "admin",
            password: "password"
        })
        expect(response.statusCode).toBe(200)
    })
})
