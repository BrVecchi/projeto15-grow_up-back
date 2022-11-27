import joi from "joi";

const newUserSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

export const newUserSchemaValidation = (req, res, next) => {
  const user = req.body;
  const validation = newUserSchema.validate(user, { abortEarly: false });
  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    res.status(422).send(errors);
    return;
  }
  next();
};
