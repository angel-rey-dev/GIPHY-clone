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
                q: q || "holidays",
                limit: limit || 20,
                offset: offset || 0,
            },
        });
        const data = yield response.data;
        const results = data.data.map((gif) => {
            const { id, title, type, rating, images, user } = gif;
            return {
                type,
                id,
                title,
                rating,
                images: {
                    large: images.downsized_large.url,
                    medium: images.fixed_width.url,
                },
                user: Object.assign({}, user),
            };
        });
        const responseData = {
            results,
            pagination: data.pagination,
        };
        console.log(responseData);
        return res.status(200).json(responseData);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}));
exports.default = search;
