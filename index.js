const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 4000;

require("dotenv").config();

connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => console.log(`APP CONNECTED AT PORT -> ${PORT}`));