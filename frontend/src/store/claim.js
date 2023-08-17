import { actionTypes } from "./actionTypes";
import { csrfFetch } from "./csrf";

const initialState = {};

// normal action creator
const getAllClaim = (claims) =>  {
    return {
        type: actionTypes.GET_ALL_CLAIM,
        payload: claims
    }
}

const createClaim = (claim) =>  {
    return {
        type: actionTypes.CREATE_CLAIM,
        payload: claim
    }
}

const updateClaim = (claim) =>  {
    return {
        type: actionTypes.UPDATE_CLAIM,
        payload: claim
    }
}

// thunk action creator
export const thunkGetAllClaim = () => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/claims`)

        if (res.ok) {
            const data = await res.json();
            dispatch(getAllClaim(data));
            return data;
        }

    } catch (e) {
        if (e.status > 400) {
            return window.location.href = ("/")
        }
        return e
    }
}

export const thunkCreateClaim = (claim) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/claims`, {
            method: "POST",
            body: JSON.stringify(claim)
        })

        if (res.ok) {
            const data = await res.json();
            dispatch(createClaim(data));
            return data;
        }

    } catch (e) {
        if (e.status > 400) {
            return window.location.href = ("/")
        }
        return e
    }
}

export const thunkUpdateClaim = (claim) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/claims`, {
            method: "PUT",
            body: JSON.stringify(claim)
        })

        if (res.ok) {
            const data = await res.json();
            dispatch(updateClaim(data));
            return data;
        }

    } catch (e) {
        if (e.status > 400) {
            return window.location.href = ("/")
        }
        return e
    }
}



export default function claimReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ALL_CLAIM: {
            const newState = { ...state }
            const claims = action.payload.claims
            for (let claim of claims){
                newState[claim.id] = claim
            }
            return newState
        }
        case actionTypes.CREATE_CLAIM: {
            const newState = { ...state }
            const claim = action.payload.claim
            newState[claim.id] = claim
            return newState
        }
        case actionTypes.UPDATE_CLAIM: {
            const newState = { ...state }
            const claim = action.payload.claim
            // console.log("NEWSTATE BEFORE", newState)

            // console.log("CLAIM", claim)
            newState[claim.id] = claim
            // console.log("NEWSTATE AFTER", newState)
            return newState
        }
        default:
            return state;
    }
}
