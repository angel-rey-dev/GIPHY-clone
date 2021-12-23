import axios from "axios";
import { Dispatch } from "redux";
import { IAction, ISearchParams } from "../interfaces";
import { SEARCH } from "../types/index";

export const search = ({ limit, offset, type, term }: ISearchParams) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.get(`/api/search`, {
        params: {
          limit,
          offset,
          type,
          q: term,
        },
      });
      return dispatch({
        type: SEARCH,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SEARCH,
        payload: error,
      });
    }
  };
};
