import { combineReducers } from "redux";
import city from "./city";

const reducers = {
  cityStore: city
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
