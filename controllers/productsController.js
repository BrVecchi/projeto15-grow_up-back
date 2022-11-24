import db from "../src/db.js"

const productsCollection = db.collection("products")

export const getProducts = async (req, res) => {
    try {
        const products = await productsCollection.find().toArray()
        res.status(201).send(products)
        console.log(products)
    } catch (error) {
        res.status(404).send(error)
    }
}