// Importing packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const axios = require("axios");
const dotenv = require("dotenv");

// Local imports
const razorPayRoutes = require("./routers/razorpay");

// Initializing express app and middlewares
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome to RazorPay API");
});

app.use("/api", razorPayRoutes);

// Running the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
