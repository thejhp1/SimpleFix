import { actionTypes } from "./actionTypes";
import { csrfFetch } from "./csrf";

const initialState = {};

// normal action creator
const getAddress = (address) =>  {
    return {
        type: actionTypes.GET_ADDRESS,
        payload: address
    }
}


// thunk action creator
export const thunkGetAddress = () => async (dispatch) => {
    try {
        console.log('aaaaaa')
        const address = "5812 Kacey Meadows Drive Greensboro NC 27410"
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${import.meta.env.VITE_GOOGLE_MAP_API_UNRESTRICT}`)
        console.log("RES", res)
        if (res.ok) {
            const data = await res.json();
            console.log("DATA", data)
            dispatch(getAddress(data));
            return data;
        }

    } catch (e) {
        if (e.status > 400) {
            return window.location.href = ("/")
        }
        return e
    }
}


export default function googleMapReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ADDRESS: {
            const newState = { ...state }
            console.log("ACTION", action)
            const address = action.payload.results[0]
            newState["location"] = address.geometry.location
            console.log("NEWSTATE", newState)
            return newState
        }
        default:
            return state;
    }
}