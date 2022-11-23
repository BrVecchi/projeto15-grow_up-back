import db from "../src/db.js"

export const postSupplements = async (req, res) => {
    const user = req.body
    try {
        await db.collection("supplements").insertOne(user)
        res.sendStatus(201)
    } catch (error) {
        res.status(404).send(error)
    }
}