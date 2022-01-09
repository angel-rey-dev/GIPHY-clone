import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const search = Router();

search.get("/", async (req: Request, res: Response): Promise<Response> => {
  const { limit, type, offset, q } = req.query;
  const url = `https://api.giphy.com/v1/${type}/search`;

  try {
    const response = await axios.get(url, {
      params: {
        api_key: process.env.API_KEY,
        q: q || "funny",
        limit: limit || 10,
        offset: offset || 0,
      },
    });

    const data = await response.data;

    const results = data.data.map((gif: any) => {
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
  } catch (error: unknown) {
    return res.status(500).json(error);
  }
});

export default search;
