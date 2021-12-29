import { GET_TRENDING_GIFS, GET_TRENDING_STICKERS } from "../types/index";
import { IAction, ITrendingState } from "../interfaces";

const initialState: ITrendingState = {
  gifs: [],
  stickers: [],
};

export default function trendingReducer(state = initialState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRENDING_GIFS:
      return {
        ...state,
        gifs: payload.info,
      };
    case GET_TRENDING_STICKERS:
      return {
        ...state,
        stickers: payload.info,
      };
    default:
      return state;
  }
}
