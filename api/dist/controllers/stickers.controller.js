"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const stickers = (0, express_1.Router)();
stickers.get("/", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const url = `https://api.giphy.com/v1/stickers/trending?api_key=${process.env.API_KEY}`;
    try {
        const response = yield axios_1.default.get(url);
        const data = yield response.data;
        const gifData = data.data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                images: {
                    large: gif.images.fixed_height.webp,
                    medium: gif.images.preview_webp.url,
                },
            };
        });
        const responseData = {
            gifs: gifData,
            pagination: data.pagination,
        };
        return res.status(200).json(responseData);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = stickers;
