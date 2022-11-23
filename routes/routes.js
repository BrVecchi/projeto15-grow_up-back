import express from "express"
import { getProducts } from "../controllers/productsController.js"
import { signIn, signUp } from "../controllers/authController.js"
import { postCart } from "../controllers/cartController.js"

export const router = express.Router()

router.get("/products", getProducts)
router.post("/sign-in", signIn)
router.post("/sign-up", signUp)
router.post("/cart", postCart)
router.get("/cart", getCart)
router.delete("/cart", deleteCart)