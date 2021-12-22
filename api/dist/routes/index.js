"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("dotenv").config();
// Controllers
const random_controller_1 = __importDefault(require("../controllers/random.controller"));
const stickers_controller_1 = __importDefault(require("../controllers/stickers.controller"));
const trending_controller_1 = __importDefault(require("../controllers/trending.controller"));
const router = (0, express_1.Router)();
router.use("/api/random", random_controller_1.default);
router.use("/api/stickers", stickers_controller_1.default);
router.use("/api/trending", trending_controller_1.default);
exports.default = router;
