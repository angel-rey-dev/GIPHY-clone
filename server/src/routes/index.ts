import { Router } from "express";
import { getTrendingGifs } from "../controllers/index.controllers";

const router = Router();

router.use("/trending", getTrendingGifs);

export default router;