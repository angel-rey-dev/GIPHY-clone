import { combineReducers } from "redux";

// Reducers
import categoriesReducer from "./categories";
import searchReducer from "./search";
import trendingReducer from "./trending";
import translateReducer from "./translate";
import detailReducer from "./detail";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  detail: detailReducer,
  search: searchReducer,
  trending: trendingReducer,
  translate: translateReducer,
});

export default rootReducer;
