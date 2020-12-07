const Joi = require('joi');

module.exports = {
    create: async (req, res, next) => {
        const schema = Joi.object().keys({
            question: Joi.string().min(10).max(200).required(),
            option1: Joi.string().max(100).required(),
            option2: Joi.string().max(100).required(),
            option3: Joi.string().max(100).required(),
            option4: Joi.string().max(100).required(),
            answer: Joi.string().max(100).required()
        })
        console.log(99)
        try{
            const validationError = await schema.validateAsync(req.body)
            console.log(100)
            next()
        } catch(err){
            console.log(1000)
            return res.status(400).json({
                status: 400,
                message: 'Form is invalid.',
                error: err.details,
            })
        }
    }
};
