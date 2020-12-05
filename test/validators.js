const Joi = require('joi');

module.exports = {
    create: async (req, res, next) => {
        const schema = Joi.object().keys({
            title: Joi.string().min(10).max(200).required(),
            details: Joi.string().min(10).max(100).required(),
            instructions: Joi.string().min(10).max(100).required()
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
