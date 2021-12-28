import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import searchReducer from "./search";
import trendingReducer from "./trending";
import translateReducer from "./translate";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  search: searchReducer,
  trending: trendingReducer,
  translate: translateReducer,
});

export default rootReducer;
