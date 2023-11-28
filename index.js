const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000

app.use(express.json())

const blog = require("./routes/blog")
app.use("/api/v1", blog)

const connectWithDB = require("./config/database")
connectWithDB()

app.listen(PORT, () => {
    // console.log(`server started at ${PORT}`)
    // console.log(`server started at 3000`)
    console.log("App is Running at the", PORT)
})


app.get("/", (req, res) => {
    res.send(`<h1>This is our page</h1>`)
})