import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./auth";
import parkReducer from "./park";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  park: parkReducer
});
