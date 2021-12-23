import { GET_TRENDING_GIFS } from "./../types/index";
import { IAction, IGifsState } from "../interfaces";

const initialState: IGifsState = {
  gifs: [],
  loading: false,
  error: null,
};

export default function gifsReducer(state = initialState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRENDING_GIFS:
      return state;
    default:
      return state;
  }
}
