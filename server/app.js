const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv").config();
const { MongoClient } = require("mongodb");
const { connect } = require('./db/config');

const app = express();
var cors = require("cors");

const UserRoutes = require("./routes/user")
// const ChatRoutes = require("./routes/chat")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log("Attempting to connect to DB...");
connect();
app.use("/api/user", UserRoutes);
// app.use("/api/chat", ChatRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is listeing on port ${process.env.PORT}`)
})

module.exports = app;

