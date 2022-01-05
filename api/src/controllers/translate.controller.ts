import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const translate = Router();

translate.get("/", async (req: Request, res: Response): Promise<Response> => {
  const { type, s } = req.query;
  const url = `https://api.giphy.com/v1/${type}/translate`;

  try {
    const response = await axios.get(url, {
      params: {
        api_key: process.env.API_KEY,
        s: s || "unknown",
      },
    });

    const { data } = await response.data;

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
      user: { ...user },
    };

    return res.status(200).json(info);
  } catch (error: unknown) {
    return res.status(500).json(error);
  }
});

export default translate;
