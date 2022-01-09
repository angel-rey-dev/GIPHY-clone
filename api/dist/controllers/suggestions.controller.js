"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const suggestions = (0, express_1.Router)();
suggestions.get("/:term", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const { term } = req.params;
    const url = `https://api.giphy.com/v1/tags/related/${term}`;
    try {
        const response = yield axios_1.default.get(url, {
            params: {
                api_key: process.env.API_KEY,
            },
        });
        const data = yield response.data;
        const suggestionsData = data.data.map((suggestion) => suggestion.name);
        return res.status(200).json({ suggestions: suggestionsData });
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).json(error);
    }
}));
exports.default = suggestions;
