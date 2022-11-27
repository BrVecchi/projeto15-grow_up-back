import joi from "joi";

const userSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export const userSchemaValidation = (req, res, next) => {
  const { email, password } = req.body;
  const validation = userSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    res.status(422).send(errors);
    return;
  }
  next();
};
