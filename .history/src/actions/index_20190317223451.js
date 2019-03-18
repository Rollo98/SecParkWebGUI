import Axios from "axios";
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT,
  AUTH_ERROR,
  PARK_SAVE,
  PARK_ERROR,
  PARK_EDIT
} from "./types";

export const SignUp = data => {
  return async dispatch => {
    try {
      const res = await Axios.post("http://localhost:5000/users/signup", data);
      dispatch({
        type: AUTH_SIGN_UP,
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

export const SignIn = data => {
  return async dispatch => {
    try {
      const res = await Axios.post("http://localhost:5000/users/signin", data);
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

export const NewPark = data => {
  return async dispatch => {
    try {
      const res = await Axios.post(
        "http://localhost:5000/parks/add_park",
        data
      );
      dispatch({
        type: PARK_SAVE,
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
export const EditPark = data => {
  return async dispatch => {
    try {
      const res = await Axios.post(
        "http://localhost:5000/parks/edit_park",
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
