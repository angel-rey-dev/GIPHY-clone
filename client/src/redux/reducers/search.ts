import { SEARCH, RESET_STATE } from "../types/index";
import { IAction } from "../interfaces";

const initialState = {
  results: [],
  pagination: {},
};

export default function searchReducer(state = initialState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH:
      return {
        ...state,
        results: [...state.results, ...payload.results],
        pagination: payload.pagination,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}
