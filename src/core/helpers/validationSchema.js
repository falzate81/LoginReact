/**
 * Created by marit on 22/09/2017.
 */
import Joi from 'joi-browser'

export const commentSchema = Joi.object().keys({
    comment: Joi.string().required(),
});

export const loginSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
});