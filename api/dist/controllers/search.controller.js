"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const search = (0, express_1.Router)();
search.get("/", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { limit, type, offset, q } = req.query;
    const url = `https://api.giphy.com/v1/${type}/search`;
    try {
        const response = yield axios_1.default.get(url, {
            params: {
                api_key: process.env.API_KEY,
                q: q || "funny",
                limit: limit || 10,
                offset: offset || 0,
            },
        });
        const data = yield response.data;
        const results = data.data.map((gif) => {
            const { id, title, type, images } = gif;
            return {
                type,
                id,
                title,
                images: {
                    large: images.downsized.url,
                    // large: images.fixed_height.webp,
                    medium: images.preview_webp.url,
                },
            };
        });
        const responseData = {
            results,
            pagination: data.pagination,
        };
        return res.status(200).json(responseData);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = search;
