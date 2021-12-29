import { GET_DETAIL, RESET_STATE } from "../types/index";
import { IAction } from "../interfaces";

type Detail = {
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
const initialState = {} as Detail;

export default function detailReducer(state = initialState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case GET_DETAIL:
      return {
        ...state,
        ...payload,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}
