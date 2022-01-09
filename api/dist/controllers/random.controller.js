"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const random = (0, express_1.Router)();
random.get("/", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { type, tag } = req.query;
    const url = `https://api.giphy.com/v1/${type}/random`;
    try {
        const response = yield axios_1.default.get(url, {
            params: {
                tag: tag || "funny",
                api_key: process.env.API_KEY,
            },
        });
        const { data } = yield response.data;
        const { id, title, type, images } = data;
        const info = {
            type,
            id,
            title,
            images: {
                large: images.fixed_height.webp,
                medium: images.preview_webp.url,
            },
        };
        return res.status(200).json(info);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = random;
