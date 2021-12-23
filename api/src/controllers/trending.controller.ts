import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const trendingRouter = Router();

trendingRouter.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const { limit, type } = req.query;
    console.log(req.query);
    const url = `https://api.giphy.com/v1/${type}/trending`;

    try {
      const response = await axios.get(url, {
        params: {
          api_key: process.env.API_KEY,
          limit: limit || 25,
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
    //   return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

export default trendingRouter;
