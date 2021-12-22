"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const server = (0, express_1.default)();
const port = process.env.PORT || 4000;
// Middlewares
server.use(express_1.default.json());
server.use(index_1.default);
server.listen(port, () => console.log("Server is running on port 4000"));
