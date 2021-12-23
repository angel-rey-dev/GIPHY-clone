import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const categories = Router();

categories.get("/", async (req: Request, res: Response): Promise<Response> => {
  const url = `https://api.giphy.com/v1/gifs/categories?api_key=${process.env.API_KEY}`;

  try {
    const response = await axios.get(url);

    const data = await response.data;

    const categoriesData = data.data.map((category: any) => {
      const { name, name_encoded, gif } = category;
      return {
        id: name_encoded,
        name,
        gif: {
          large: gif.images.downsized_large.url,
          medium: gif.images.fixed_width.url,
        },
      };
    });

    return res.status(200).json(categoriesData);
  } catch (error: unknown) {
    return res.status(500).json(error);
  }
});

export default categories;
