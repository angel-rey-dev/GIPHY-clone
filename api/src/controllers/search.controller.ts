import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const search = Router();

search.get("/", async (req: Request, res: Response): Promise<Response> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${"rocket"}`

  try {
    const response = await axios.get(url);
    const data = await response.data;
    const gifData = data.data.map((gif: any) => {
      return {
        id: gif.id,
        title: gif.title,
        rating: gif.rating,
        images: {
          large: gif.images.downsized_large.url,
          medium: gif.images.fixed_height.url,
        },
        user: { ...gif.user },
      };
    });

    const responseData = {
      gifs: gifData,
      pagination: data.pagination,
    };

    return res.status(200).json(responseData);
  } catch (error: unknown) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default search;
