import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const detail = Router();

detail.get("/", async (req: Request, res: Response): Promise<Response> => {
  const url =  `https://api.giphy.com/v1/gifs/${"LbUP2IK8sfHAKEk9yA"}?api_key=${process.env.API_KEY}&tag=${"rocket"}`;

  try {
    const response = await axios.get(url);
    const { data } = await response.data;
    const gifData = {
      id: data.id,
      title: data.title,
      rating: data.rating,
      images: {
        large: data.images.downsized_large.url,
        medium: data.images.fixed_height.url,
      },
      user: { ...data.user },
    };
    return res.status(200).json(gifData);
  } catch (error: unknown) {
    return res.status(500).json(error);
  }
});

export default detail;
