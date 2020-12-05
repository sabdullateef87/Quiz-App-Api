const QuestionModel = require('./models')

const controller = {
    create: async (req, res) => {
        console.log(1000)
        const data = {...req.body, test: req.params.test_id}
        console.log(req.params)
        console.log(data)
        const question = await QuestionModel.create(data)
        console.log(question)
        res.json(question)
    },
    list: async (req, res) => {
        const questions = await QuestionModel.find({test: req.params.test_id})
        res.json(questions)
    },
    delete: (req, res) => {},
    retrieve: (req, res) => {},
    update: (req, res) => {}
}

module.exports = controller 