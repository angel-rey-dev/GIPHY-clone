import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "../interfaces";
import { TRANSLATE } from "../types";

export const translate = (s: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.get(`/api/translate?s=${s}&type=gifs`);
      return dispatch({
        type: TRANSLATE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: TRANSLATE,
        payload: error,
      });
    }
  };
};