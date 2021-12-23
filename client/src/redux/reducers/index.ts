import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import searchReducer from "./search";
import trendingReducer from "./trending";

const rootReducer = combineReducers({
  search: searchReducer,
  categories: categoriesReducer,
  trending: trendingReducer,
});

export default rootReducer;
