import axios from "axios";
import { Dispatch } from "redux";
import { IAction, ISearchParams } from "../interfaces";
import { SEARCH, RESET_STATE, SEARCH_SUGGESTIONS } from "../types/index";

export function search({ limit, offset, type, term }: ISearchParams) {

  return async (dispatch: Dispatch<IAction>) => {
    try {
      const results = await axios.get(`/api/search`, {
        params: {
          limit,
          offset,
          type,
          q: term,
        },
      });
      return dispatch({
        type: SEARCH,
        payload: results.data,
      });
    } catch (error) {
      return dispatch({
        type: SEARCH,
        payload: error,
      });
    }
  };
}

export function searchSuggestions({ term }: { term: string }) {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const suggestions = await axios.get(`/api/suggestions/${term}`);
      return dispatch({
        type: SEARCH_SUGGESTIONS,
        payload: suggestions.data,
      });
    } catch (error) {
      return dispatch({
        type: SEARCH_SUGGESTIONS,
        payload: error,
      });
    }
  };
}

export function resetState() {
  return async (dispatch: Dispatch<IAction>) => {
    return dispatch({
      type: RESET_STATE,
    });
  };
}
