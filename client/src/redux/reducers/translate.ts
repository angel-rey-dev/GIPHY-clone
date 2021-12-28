import { RESET_STATE, TRANSLATE } from "../types/index";
import { IAction } from "../interfaces";

const initialState = {
  item: {},
};

export default function translateReducer(
  state = initialState,
  action: IAction
) {
  const { type, payload } = action;

  switch (type) {
    case TRANSLATE:
      return {
        ...state,
        item: payload,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}
