const express = require("express");
const router = express.Router();
const { create, list, retrieve, remove } = require("./controller");

// var validators = require('./validators')
// router.post('/', validators.create, controller.create)
router.post("/createTest", create);
router.get("/getAllTest", list);
router.get("/getTest/:id", retrieve);
router.delete("/deleteTest/:id", remove);
module.exports = router;
