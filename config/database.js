const mongoose = require("mongoose");

require("dotenv").config();
const connectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Successfylly connected with database"))
    .catch((error) => {
        console.log("Issue in db connection")
        console.error(error.message)
        process.exit(1)
    })
}
module.exports = connectWithDB;