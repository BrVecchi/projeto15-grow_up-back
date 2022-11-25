import db from "../src/db.js";

const usersCollection = db.collection("users");
const cartColletcion = db.collection("carts");
const sessionsCollection = db.collection("sessions");

export const postCart = async (req, res) => {
  const { name, price, image } = req.body;
  const token = req.token;

  try {
    const session = await sessionsCollection.findOne({token});
    const user = await usersCollection.findOne({_id: session?.userId})
    if (!user) {
        res.status(401).send("Usuário não logado!")
    }
    await cartColletcion.insertOne({
        name,
        price,
        image,
        userId: user._id
    })
    res.sendStatus(201)
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getCart = async (req, res) => {
  const token = req.token;
  try {
    const session = await sessionsCollection.findOne({ token });
    const userId = session.userId;
    const cart = await cartColletcion.find({ userId }).toArray();
    res.status(200).send(cart);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const deleteCart = async (req, res) => {
  const token = req.token;
  try {
    const session = await sessionsCollection.findOne({token});
    const userId = session.uderId;
    await cartColletcion.deleteOne({userId});
    res.sendStatus(202)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}
