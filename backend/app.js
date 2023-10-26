const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

const tour = require("./router/tourRoute");

app.use("/", tour);
app.use("/", tour);
connectDB();

app.listen(3000, function () {
  console.log("Server started on port 3000");
});