import db from "../src/db.js"

const productsCollection = db.collection("products")

export const getProducts = async (req, res) => {
    const user = req.body
    try {
        await productsCollection.find().toArray()
        res.sendStatus(201)
    } catch (error) {
        res.status(404).send(error)
    }
}