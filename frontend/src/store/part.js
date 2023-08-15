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

const createPart = (part) => {
    return {
        type: actionTypes.CREATE_PART,
        payload: part
    }
}

const deletePart = (part) => {
    return {
        type: actionTypes.DELETE_PART,
        payload: part
    }
}

const updatePart = (part) => {
    return {
        type: actionTypes.UPDATE_PART,
        payload: part
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

export const thunkCreatePart = (part) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/parts/new`, {
            method: "POST",
            body: JSON.stringify(part)
        })

        if (res.ok) {
            const data = await res.json();
            dispatch(createPart(data));
            return data;
        }

    } catch (e) {
        if (e.status > 400) {
            return window.location.href = ("/")
        }
        return e
    }
}

export const thunkDeletePart = (part) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/parts/${part.id}`, {
            method: "DELETE"
        })
        if (res.ok) {
            const data = await res.json()
            dispatch(deletePart(part))
            return data
          }
    } catch (error) {
        return e
    }
}

export const thunkUpdatePart = (part) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/parts/${part.partId}`, {
            method: "PUT",
            body: JSON.stringify(part)
        })
        if (res.ok) {
            const data = await res.json();
            dispatch(updatePart(data));
        }
    } catch (e) {
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
