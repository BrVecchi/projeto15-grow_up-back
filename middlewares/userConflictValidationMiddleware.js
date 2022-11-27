import db from "../src/db.js";

const usersCollection = db.collection("users");

export const userConflictMiddleware = async (req, res, next) => {
  const { email } = req.body;
  const emailValidation = await usersCollection.findOne({ email });

  if (emailValidation) {
    res.sendStatus(409);
    return;
  }
  next();
};
