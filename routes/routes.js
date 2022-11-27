import express from "express"
import { getProducts } from "../controllers/productsController.js"
import { signIn, signUp } from "../controllers/authController.js"
import { deleteCart, getCart, postCart } from "../controllers/cartController.js"
import { tokenMiddleware } from "../middlewares/tokenValidationMiddleware.js"
import { userAuthMiddleware } from "../middlewares/userAuthValidationMiddleware.js"
import { userConflictMiddleware } from "../middlewares/userConflictValidationMiddleware.js"
import { newUserSchemaValidation } from "../middlewares/newUserSchemaMiddleware.js"
import { userSchemaValidation } from "../middlewares/userSchemaMiddleware.js"


export const router = express.Router()

router.get("/products", getProducts)
router.post("/sign-in", userSchemaValidation, userAuthMiddleware, signIn)
router.post("/sign-up",newUserSchemaValidation, userConflictMiddleware, signUp)
router.post("/cart",tokenMiddleware, postCart)
router.get("/cart",tokenMiddleware, getCart)
router.delete("/cart",tokenMiddleware, deleteCart)
