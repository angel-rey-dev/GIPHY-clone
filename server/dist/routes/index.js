"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = require("../controllers/index.controllers");
const router = (0, express_1.Router)();
router.get("/trending", index_controllers_1.getTrendingGifs);
exports.default = router;
