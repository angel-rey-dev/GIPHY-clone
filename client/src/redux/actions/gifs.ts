import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "../interfaces";
import { GET_TRENDING_GIFS } from "../types";

export const getTrendingGifs = (limit: number, type: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.get(`/api/trending`, {
        params: {
          limit,
          type,
        },
      });
      return dispatch({
        type: GET_TRENDING_GIFS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_TRENDING_GIFS,
        payload: error,
      });
    }
  };
};
