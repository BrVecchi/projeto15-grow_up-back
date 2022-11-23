import express from "express"
import { getProducts } from "../controllers/productsController.js"
import { signIn, signUp } from "../controllers/authController.js"
import { postCart } from "../controllers/cartController.js"
import { tokenMiddleware } from "../middlewares/tokenValidationMiddleware.js"

export const router = express.Router()

router.get("/products", getProducts)
router.post("/sign-in", signIn)
router.post("/sign-up", signUp)
router.post("/cart",tokenMiddleware, postCart)
router.get("/cart",tokenMiddleware, getCart)
router.delete("/cart",tokenMiddleware, deleteCart)
