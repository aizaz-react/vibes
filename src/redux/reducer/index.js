import { combineReducers } from "redux";
import { languageReducer } from "./languageReducer";

const rootReducer = combineReducers({
  languageData: languageReducer,
});

export default rootReducer;
