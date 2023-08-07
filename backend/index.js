// Dependencies
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Create a write stream for the access log
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
const app = express();

// Use morgan middleware with the custom log stream
app.use(morgan("combined", { stream: accessLogStream }));

// To handle CORS issue
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

// Database connection
const  connectDB  = require("./config/database");

// Importing Routes
const {
  userRouter,
  expenseRouter,
  paymentRouter,
  nodeMailerRoute,
} = require("./route");

// Routes
app.use("/api/user", userRouter);
app.use("/api/main", expenseRouter);
app.use("/api/razorpay", paymentRouter);
app.use("/api/nodemail", nodeMailerRoute);

// Helmet
app.use(helmet());
// Compression
app.use(compression());

// Database connection 
connectDB()

// Starting the server
app.listen(process.env.PORT || 3000, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${process.env.PORT}`);
});


