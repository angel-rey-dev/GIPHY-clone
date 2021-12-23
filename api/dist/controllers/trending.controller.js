"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const trendingRouter = (0, express_1.Router)();
trendingRouter.get("/", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { limit, type, offset } = req.query;
    console.log(req.query);
    const url = `https://api.giphy.com/v1/${type}/trending`;
    try {
        const response = yield axios_1.default.get(url, {
            params: {
                api_key: process.env.API_KEY,
                limit: limit || 25,
                offset: offset || 0,
            },
        });
        const data = yield response.data;
        const info = data.data.map((gif) => {
            const { id, title, type, rating, images, user } = gif;
            return {
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
        });
        const responseData = {
            info: info,
            pagination: data.pagination,
        };
        return res.status(200).json(responseData);
        //   return res.status(200).json(data);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = trendingRouter;
