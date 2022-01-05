import { SEARCH, RESET_STATE, SEARCH_SUGGESTIONS } from "../types/index";
import { IAction } from "../interfaces";

const initialState = {
  results: [],
  pagination: {},
  suggestions: [],
};

type ResultItem = {
  type: string;
  id: string;
  title: string;
  rating: string;
  images: {
    large: string;
    medium: string;
  };
  user: any;
};

export default function searchReducer(state = initialState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH:
      const filteredResults = payload.results?.filter((result: ResultItem) => {
        return state.results.every((item: ResultItem) => item.id !== result.id);
      });
      return {
        ...state,
        results: [...state.results, ...filteredResults],
        pagination: payload.pagination,
      };
    case SEARCH_SUGGESTIONS:
      return {
        ...state,
        suggestions: payload.suggestions,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}
