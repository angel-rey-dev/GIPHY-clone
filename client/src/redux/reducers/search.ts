import { SEARCH } from "../types/index";
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
        results: payload.results,
        pagination: payload.pagination,
      };
    default:
      return state;
  }
}
