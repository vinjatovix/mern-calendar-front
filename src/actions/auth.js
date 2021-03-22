import { types } from "../types/types";
import {
  endpoints,
  noTokenFetch,
  tokenFetch,
  processTokenResponse,
} from "../helpers/API/api-helpers";

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const res = await noTokenFetch(
      endpoints.register,
      { email, password, name },
      "POST"
    );
    const body = await res.json();
    processTokenResponse(body, dispatch);
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await noTokenFetch(
      endpoints.login,
      { email, password },
      "POST"
    );
    const body = await res.json();
    processTokenResponse(body, dispatch);
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    if (!localStorage.getItem("token")) {
      dispatch(checkingFinish());
    } else {
      const res = await tokenFetch(endpoints.renew);
      const body = await res.json();
      processTokenResponse(body, dispatch);
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

export const checkingFinish = () => ({ type: types.authCheckingFinish });

export const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const logout = () => ({ type: types.authLogout });
