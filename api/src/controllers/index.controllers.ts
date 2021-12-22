import { Request, Response } from "express";

export const getTrendingGifs = (req: Request, res: Response): Response => {
  return res.send("getTrendingGifs").json("getTrendingGifs");
};
// export const getTrendingGifs = (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   return res.send("getTrendingGifs").json("getTrendingGifs");
// };
