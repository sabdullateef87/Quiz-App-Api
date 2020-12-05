const TestModel = require('./models')

const controller = {
    create: async (req, res) => {
        console.log(1000)
        const test = await TestModel.create(req.body)
        console.log(test)
        res.json(test)
    },
    list: async (req, res) => {
        const tests = await TestModel.find()
        res.json(tests)
    },
    delete: (req, res) => {},
    retrieve: (req, res) => {},
    update: (req, res) => {}
}

module.exports = controller 