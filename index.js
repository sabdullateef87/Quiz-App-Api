const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const testRouter = require("./test/routes");
const questionRouter = require("./question/routes")
const PORT = process.env.PORT || 4000;

require("dotenv").config();

connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});
app.use('/test', testRouter)
app.use('/test/:test_id/questions', questionRouter)
app.listen(PORT, () => console.log(`APP CONNECTED AT PORT -> ${PORT}`));
