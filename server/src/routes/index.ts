import { Router } from "express";
import { getTrendingGifs } from "../controllers/index.controllers";

const router = Router();

router.get("/trending", getTrendingGifs);

export default router;