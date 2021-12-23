import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "../interfaces";
import { GET_CATEGORIES } from "../types";

export const getCategories = () => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/categories`);
      console.log(response.data);
      return dispatch({
        type: GET_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: GET_CATEGORIES,
        payload: error,
      });
    }
  };
};
