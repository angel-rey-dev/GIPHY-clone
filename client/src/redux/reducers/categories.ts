import { GET_CATEGORIES } from "../types/index";
import { IAction } from "../interfaces";

export default function categoriesReducer(state = [], action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return payload;
    default:
      return state;
  }
}
