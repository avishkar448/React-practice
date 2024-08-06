const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
//const morgan=require('morgan')
const cors = require("cors");
const db = require("./config/db");

//env
dotenv.config();

//db
db();

//app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//route
app.use("/api/v1/user", require("./routes/authRoutes"));

// app.get("/x", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`.bgGreen.white);
});
