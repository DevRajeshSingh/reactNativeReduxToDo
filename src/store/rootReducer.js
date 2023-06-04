import { mainReducer } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mainReducer,
});

export default rootReducer;
