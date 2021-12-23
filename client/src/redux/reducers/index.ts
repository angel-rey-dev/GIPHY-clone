import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import trendingReducer from "./trending";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  trending: trendingReducer,
});

export default rootReducer;
