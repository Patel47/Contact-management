const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const contactRoute = require("./route/contactRoute");
const userRoute = require("./route/userRoute");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/connectDb");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// adding comment for testing

connectDb();
app.use(express.json());
app.use(cors());

app.use("/api/contacts", contactRoute);
app.use("/api/user", userRoute);
app.use(errorHandler);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
