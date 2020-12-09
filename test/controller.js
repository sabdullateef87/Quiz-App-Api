const TestModel = require("./models");

const controller = {
  create: async (req, res) => {
    const { title, details, instructions, active, deleted } = req.body;
    try {
      const Test = new TestModel({
        title,
        details,
        instructions,
        active,
        deleted,
        // timestamps,
      });

      await Test.save();
      res.status(200).json({
        status: "Success",
        message: "A new test has been created",
        data: {
          title,
          details,
          instructions,
          active,
          deleted,
          //   timestamps,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err.message,
      });
    }
  },
  list: async (req, res) => {
    try {
      const tests = await TestModel.find();
      res.status(200).json(tests);
    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err.message,
      });
    }
  },
  remove: async (req, res) => {
    const { id } = req.params;
    try {
      const testById = await TestModel.findOneAndRemove({ _id: id });
      if (!testById) {
        return res.status(200).json({
          status: "Failed",
          message: "Item does not exist in the collection",
        });
      }
      res.status(200).json({
        status: "Success",
        message: `${testById.title} has been removed from the collection`,
        data: testById,
      });
    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err.message,
      });
    }
  },
  retrieve: async (req, res) => {
    const { id } = req.params;
    try {
      const testById = await TestModel.findById({ _id: id });
      if (!testById) {
        return res.status(404).json({
          status: "Failed",
          message: "Test not found in the collection",
        });
      }
      res.status(200).json({
        status: "Success",
        data: testById,
      });
    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err.message,
      });
    }
  },
  update: (req, res) => {},
};

module.exports = controller;
