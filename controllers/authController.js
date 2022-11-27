import db from "../src/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

const usersCollection = db.collection("users");
const sessionsCollection = db.collection("sessions");

export const signUp = async (req, res) => {
  const user = req.body;

  try {
    const hashPassword = bcrypt.hashSync(user.password, 10);

    await usersCollection.insertOne({ ...user, password: hashPassword });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const signIn = async (req, res) => {
  const { password } = req.body;
  const userValidation = req.userValidation

  try {

    const token = uuidV4();
    const passwordValidation = bcrypt.compareSync(
      password,
      userValidation.password
    );
    if (!passwordValidation) {
      res.status(401).send("Senha inválida!");
      return;
    }

    await sessionsCollection.insertOne({
      token,
      userId: userValidation._id,
      name: userValidation.name,
    });
    res.send({ token, name: userValidation.name });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
