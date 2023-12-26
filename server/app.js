const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv").config();
const { MongoClient } = require("mongodb");
const { connect } = require('./db/config');
const cookieParser = require("cookie-parser");
const  cors = require("cors");

const UserRoutes = require("./routes/user")
const ChatRoutes = require("./routes/chat")

const app = express();

// const ChatRoutes = require("./routes/chat")
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Credentials",true)
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")

    next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


console.log("Attempting to connect to DB...");
connect();
app.use("/auth/user", UserRoutes);
app.use("/api/chat", ChatRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is listeing on port ${process.env.PORT}`)
})

module.exports = app;

