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
        q: q || "unknown",
        limit: limit || 25,
        offset: offset || 0,
      },
    });

    const data = await response.data;

    const info = data.data.map((gif: any) => {
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
        user: { ...user },
      };
    });

    const responseData = {
      info: info,
      pagination: data.pagination,
    };

    return res.status(200).json(responseData);
  } catch (error: unknown) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default search;
