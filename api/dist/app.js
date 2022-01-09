"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const index_1 = (0, tslib_1.__importDefault)(require("./routes/index"));
const server = (0, express_1.default)();
const port = process.env.PORT || 4000;
// Middlewares
server.use((0, cors_1.default)({
    origin: "https://gipho.vercel.app/",
}));
server.use(express_1.default.json());
server.use((0, morgan_1.default)("dev"));
server.use("/", index_1.default);
server.listen(port, () => console.log(`Server is running on port ${port}`));
exports.default = server;
