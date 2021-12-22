"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const related = (0, express_1.Router)();
related.get("/", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const url = `https://api.giphy.com/v1/tags/related/${"goku"}?api_key=${process.env.API_KEY}`;
    try {
        const response = yield axios_1.default.get(url);
        const data = yield response.data;
        const relatedData = data.data.map((tag) => tag.name);
        return res.status(200).json({ related: relatedData });
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = related;
