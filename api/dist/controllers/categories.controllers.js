"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const categories = (0, express_1.Router)();
categories.get("/", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const url = `https://api.giphy.com/v1/gifs/categories?api_key=${process.env.API_KEY}`;
    try {
        const response = yield axios_1.default.get(url);
        const data = yield response.data;
        const categoriesData = data.data.map((category) => {
            const { name, name_encoded, gif } = category;
            return {
                id: name_encoded,
                name,
                gif: {
                    large: gif.images.downsized_large.url,
                    medium: gif.images.fixed_width.url,
                },
            };
        });
        return res.status(200).json(categoriesData);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = categories;
