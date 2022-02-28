const Joi = require('joi');

const NewTagValidation = data => {
    const schema = Joi.object({
        name:Joi.string().trim().required(),
    })

    return schema.validate(data)
}

export  { NewTagValidation }