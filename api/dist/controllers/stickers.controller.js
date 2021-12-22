"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const stickers = (0, express_1.Router)();
stickers.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.giphy.com/v1/stickers/trending?api_key=${process.env.API_KEY}`;
    try {
        const response = yield axios_1.default.get(url);
        const data = yield response.data;
        const gifData = data.data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                rating: gif.rating,
                images: {
                    large: gif.images.downsized_large.url,
                    medium: gif.images.fixed_height.url,
                },
                user: Object.assign({}, gif.user),
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
