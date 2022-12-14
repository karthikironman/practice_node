const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const user = require("./routes/user");
const category = require("./routes/category")
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors())
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.use("/category",category)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
