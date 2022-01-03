import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "../interfaces";
import { GET_DETAIL } from "../types";

export const getDetail = (id: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.get(`/api/detail/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_DETAIL,
        payload: error,
      });
    }
  };
};
