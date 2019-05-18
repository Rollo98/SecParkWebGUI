import Axios from "axios";
import {
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT,
  AUTH_ERROR,
  PARK_ERROR,
  PARK_EDIT
} from "./types";

export const SignIn = data => {
  return async dispatch => {
    try {
      const res = await Axios.post("http://40.127.170.50:5001/signin", data);
      dispatch({
        type: AUTH_SIGN_IN,
        payload: res.data.token
      });
      localStorage.setItem("JWT_TOKEN", res.data.token);
    } catch (error) {
      if (error.response.status === 400) {
        dispatch({
          type: AUTH_ERROR,
          payload: error.response.data.details[0].message
        });
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: error.response.data
        });
      }
    }
  };
};

export const SignOut = () => {
  return async dispatch => {
    localStorage.removeItem("JWT_TOKEN");
    dispatch({
      type: AUTH_SIGN_OUT,
      payload: ""
    });
  };
};

export const EditPark = data => {
  return async dispatch => {
    try {
      const res = await Axios.post(
        "http://40.127.170.50:5000/parks/edit_park",
        data
      );
      dispatch({
        type: PARK_EDIT,
        payload: res.data.token
      });
    } catch (error) {
      if (error.response.status === 400) {
        dispatch({
          type: PARK_ERROR,
          payload: error.response.data.details[0].message
        });
      } else {
        dispatch({
          type: PARK_ERROR,
          payload: error.response.data
        });
      }
    }
  };
};
