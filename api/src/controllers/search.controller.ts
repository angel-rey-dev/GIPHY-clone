import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const random = Router();

random.get("/", async (req: Request, res: Response): Promise<Response> => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`;

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

export default random;
