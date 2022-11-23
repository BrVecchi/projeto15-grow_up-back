import express from "express"
import { getProducts } from "../controllers/productsController.js"

export const router = express.Router()

router.get("/products", getProducts)
router.post("/sign-in", signIn)
router.post("/sign-up", signUp)