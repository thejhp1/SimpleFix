import { csrfFetch } from "./csrf";
import { actionTypes } from "./actionTypes";

// regular action creator
const setUser = (user) => {
  return {
    type: actionTypes.SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: actionTypes.REMOVE_USER,
  };
};


export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  console.log('DATA', data)
  dispatch(setUser(data.user));
  return response;
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  try {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({
        credential,
        password,
      }),
    });
    const data = await response.json();
    if (response.ok === true) {
      dispatch(setUser(data.user));
    }
  } catch (error) {
    const data = await error.json();
    throw data;
  }
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  try {
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.ok === true) {
      dispatch(setUser(data.user));
    }
    return response;
  } catch (error) {
    const data = await error.json();
    throw data;
  }
};

export const logout = () => async (dispatch) => {
  console.log('sdfd')
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

// state object
const initialState = { user: null };

// reducer
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.SET_USER:
      newState = Object.assign({}, state);
      console.log('action', action)
      newState.user = action.payload;
      return newState;
    case actionTypes.REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
