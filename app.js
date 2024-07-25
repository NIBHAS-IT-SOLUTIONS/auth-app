const express = require("express");
var cors=require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
const router = require("./routes/users");
const errorHandler = require("./middleware/errorHandler");
const app = express();
//! Connect to mongodb
mongoose
  .connect("mongodb+srv://nibhas:nibhas@cluster0.ndn704r.mongodb.net/auth-api")
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));

app.use(cors())
//! Middlewares
app.use(express.json()); //pass incoming json data from the user
app.use(cookieParser())
//!Routes
app.use("/", router);
//!error handler
app.use(errorHandler);
//! Start the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is up and running`));
