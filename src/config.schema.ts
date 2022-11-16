import * as Joi from '@hapi/joi'

export const configValidationSchema = Joi.object({
  MODE: Joi.string().valid('production', 'development', 'staging').default('development'),
  PORT: Joi.number().default(8000).required()
})
