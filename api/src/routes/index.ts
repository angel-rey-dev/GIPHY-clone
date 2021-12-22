import { Router } from "express";
require("dotenv").config();

// Controllers
import categories from "../controllers/categories.controllers";
import random from "../controllers/random.controller";
import search from "../controllers/search.controller";
import stickers from "../controllers/stickers.controller";
import translate from "../controllers/translate.controller";
import trending from "../controllers/trending.controller";

const router = Router();
router.use("/api/categories", categories);
router.use("/api/random", random);
router.use("/api/search", search);
router.use("/api/stickers", stickers);
router.use("/api/translate", translate);
router.use("/api/trending", trending);

export default router;