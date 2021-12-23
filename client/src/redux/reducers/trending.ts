import { GET_TRENDING } from "../types/index";
import { IAction, ITrendingState } from "../interfaces";

const initialState: ITrendingState = {
  gifs: [],
  stickers: [],
};

export default function trendingReducer(state = initialState, action: IAction ) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRENDING:
      return state;
    default:
      return state;
  }
}
