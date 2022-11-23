import express from "express";
import cors from "cors";
import { router } from "../routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router)

const port = process.env.PORT || 5000

app.listen(port);
console.log(`Rodando na porta ${port}`);