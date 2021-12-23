import { combineReducers } from "redux";
import gifsReducer from "./gifs";

const rootReducer = combineReducers({
  gifs: gifsReducer,
});

export default rootReducer;