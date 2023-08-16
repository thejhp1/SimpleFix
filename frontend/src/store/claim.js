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

export default function claimReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ALL_CLAIM: {
            const newState = { ...state }
            const claims = action.payload.claims
            console.log("CLAIMS", claims)
            for (let claim of claims){
                newState[claim.id] = claim
            }
            console.log("NEWSTATE", newState)
            return newState

        }
        default:
            return state;
    }
}
