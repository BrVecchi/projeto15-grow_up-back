import express from "express"
import { postSupplements } from "../controllers/newSupController.js"

export const router = express.Router()

router.post("/supplements", postSupplements)