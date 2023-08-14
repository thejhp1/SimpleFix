import { actionTypes } from "./actionTypes";
import { csrfFetch } from "./csrf";

const initialState = {};

// normal action creator
const getAllPart = (parts) =>  {
    return {
        type: actionTypes.GET_ALL_PART,
        payload: parts
    }
}

// thunk action creator
export const thunkGetAllPart = () => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/parts`)

        if (res.ok) {
            const data = await res.json();
            dispatch(getAllPart(data));
            return data;
        }

    } catch (e) {
        if (e.status > 400) {
            return window.location.href = ("/")
        }
        return e
    }
}


export default function partReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ALL_PART: {
            const newState = { ...state }
            const parts = action.payload.parts
            for (let part of parts){
                newState[part.id] = part
            }
            return newState
        }
        default:
            return state;
    }
}
