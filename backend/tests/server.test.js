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

// 1 Checking if the server is running
describe("Server homepage", () => {
    it("shows data sent message", async () => {
        const response = await request(app).get("/")
        //assertion
        expect(response.statusCode).toBe(200)
        expect(response.body.data).toBe("Data Send")
    })
})

// 2.a Checking to get all the foodblogs
describe("Get foodblogs", () => {
    it("gets a list of foodblogs", async () => {
        const response = await request(app).get("/foodblogs")
        expect(response.statusCode).toBe(200)
    })
})



// 2.b Checking if create foodblogs work
describe("Create a foodblog", () => {
    it("creates a new foodblog", async () => {
        const response = await request(app).post("/foodblogs")
        .set({ Authorization: `Bearer ${token}`})
        .send({
            title: "Chinese Food",
            description: "Get some good chinese food",
            restaurant: "YamCkkkkka",
            price: 80,
            cuisine: "Chinese Food"
        })
        expect(response.statusCode).toBe(200)
    })
})

// 2.c check a specific foodblog
// describe("Get a specific foodblog", () => {
//     test("Get the specific foodblog", async () => {
//         const response = await request(app).get("/foodblogs/:foodblogId")
//         expect(response.statusCode).toBe(200)
//     })
// })


// 3 Checking all user available
describe("Get useers", () => {
    it("Get all users", async () => {
        const response = await request(app).get("/users")
        expect(response.statusCode).toBe(200)
    })
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





