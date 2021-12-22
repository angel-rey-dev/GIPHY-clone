import { Request, Response } from "express";
import { Router } from "express";
import axios from "axios";

const suggestions = Router();

suggestions.get("/", async (req: Request, res: Response): Promise<Response> => {
  const url = `https://api.giphy.com/v1/tags/related/${"goku"}?api_key=${process.env.API_KEY}`;

  try {
    
    const response = await axios.get(url);
    const data = await response.data;
    const suggestionsData = data.data.map((suggestion: any) => suggestion.name);
    
    return res.status(200).json({ related: suggestionsData });

  } catch (error: unknown) {
    return res.status(500).json(error);
  }
});

export default suggestions;
