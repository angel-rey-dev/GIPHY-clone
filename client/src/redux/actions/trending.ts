import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "../interfaces";
import { GET_TRENDING } from "../types";

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
        type: GET_TRENDING,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_TRENDING,
        payload: error,
      });
    }
  };
};
