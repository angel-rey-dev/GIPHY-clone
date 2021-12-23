"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const detail = (0, express_1.Router)();
detail.get("/:id", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const url = `https://api.giphy.com/v1/gifs/${id}`;
    console.log(url);
    try {
        const response = yield axios_1.default.get(url, {
            params: {
                api_key: process.env.API_KEY,
            },
        });
        const { data } = yield response.data;
        const { id, title, type, rating, images, user } = data;
        const info = {
            type,
            id,
            title,
            rating,
            images: {
                large: images.downsized_large.url,
                medium: images.fixed_height.url,
            },
            user: Object.assign({}, user),
        };
        return res.status(200).json(info);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = detail;
