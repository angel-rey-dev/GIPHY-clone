import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const trendingRouter = Router();

trendingRouter.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const { limit, type, offset } = req.query;
    const url = `https://api.giphy.com/v1/${type}/trending`;

    try {
      const response = await axios.get(url, {
        params: {
          api_key: process.env.API_KEY,
          limit: limit || 25,
          offset: offset || 0,
        },
      });

      const data = await response.data;

      const info = data.data.map((gif: any) => {
        const { id, title, type, images } = gif;
        return {
          type,
          id,
          title,
          images: {
            // large: images.downsized_small.url,
            large: images.fixed_height.webp,
            medium: images.preview_webp.url,
          },
        };
      });

      const responseData = {
        info: info,
        pagination: data.pagination,
      };

      return res.status(200).json(responseData);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

export default trendingRouter;
