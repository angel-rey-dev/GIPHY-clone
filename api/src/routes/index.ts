import { Router } from "express";
require("dotenv").config();

// Controllers
import random from "../controllers/random.controller";
import stickers from "../controllers/stickers.controller";
import trending from "../controllers/trending.controller";


const router = Router();
router.use("/api/random", random);
router.use("/api/stickers", stickers);
router.use("/api/trending", trending);

export default router;
