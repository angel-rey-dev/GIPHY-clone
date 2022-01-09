import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const random = Router();

random.get("/", async (req: Request, res: Response): Promise<Response> => {
  const { type, tag } = req.query;
  const url = `https://api.giphy.com/v1/${type}/random`;

  try {
    const response = await axios.get(url, {
      params: {
        tag: tag || "funny",
        api_key: process.env.API_KEY,
      },
    });

    const { data } = await response.data;

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
  } catch (error: unknown) {
    return res.status(500).json(error);
  }
});

export default random;
