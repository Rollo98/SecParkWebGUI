import { PARK_EDIT, PARK_SAVE, PARK_ERROR } from "../actions/types";

const DEFAULT_STATE = {
  reqStatus: "",
  errorMessage: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case PARK_SAVE:
      return { ...state, reqStatus: action.payload, errorMessage: "" };
    case PARK_EDIT:
      return { ...state, reqStatus: action.payload, errorMessage: "" };
    case PARK_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
