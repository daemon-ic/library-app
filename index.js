const express = require("express");
const mongoose = require("mongoose");
const hostPort = 9000;

const app = express();

// connecting database
mongoose
  .connect("mongodb://localhost/library")
  .then(() => console.log("Database Connected..."));

// middleware - interconnects needed things to app (maybe)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/books", require("./routes/bookRoutes"));
app.use("/rentals", require("./routes/rentalRoutes"));

// Server run
app.listen(hostPort, () => {
  console.log("Server is running...");
});
