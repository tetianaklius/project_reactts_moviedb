import Joi from "joi";

export const searchReqValidator = Joi.object({
    searchStr: Joi.string().min(1).messages({
        "string.empty": "для пошуку потрібно щось написати"
    })
})