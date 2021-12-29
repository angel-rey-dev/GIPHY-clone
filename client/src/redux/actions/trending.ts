import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "../interfaces";
import { GET_TRENDING_GIFS, GET_TRENDING_STICKERS } from "../types";

export const getTrendingGifs = (limit: number) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.get(`/api/trending`, {
        params: {
          limit,
          type: "gifs",
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

export const getTrendingStickers = (limit: number) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.get(`/api/trending`, {
        params: {
          limit,
          type: "stickers",
        },
      });
      return dispatch({
        type: GET_TRENDING_STICKERS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_TRENDING_STICKERS,
        payload: error,
      });
    }
  };
};
