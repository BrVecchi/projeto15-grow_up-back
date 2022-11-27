import db from "../src/db.js";

const usersCollection = db.collection("users");

export const userAuthMiddleware = async (req, res, next) => {
  const { email } = req.body;
  const userValidation = await usersCollection.findOne({ email });

  if (!userValidation) {
    res.sendStatus(401);
    return;
  }
  req.userValidation = userValidation
  next();
};
