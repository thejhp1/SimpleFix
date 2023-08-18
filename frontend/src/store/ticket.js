import { actionTypes } from "./actionTypes";
import { csrfFetch } from "./csrf";

const initialState = {};

// normal action creator
const getAllTicket = (tickets) => {
    return {
        type: actionTypes.GET_ALL_TICKET,
        payload: tickets
    }
}

// thunk action creator
export const thunkGetAllTicket = () => async (dispatch) => {
    const res = await csrfFetch(`/api/tickets`)

    if (res.ok) {
        const data = await res.json();
        dispatch(getAllTicket(data));
        return data;
    }
}

export default function ticketReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ALL_TICKET: {
            const newState = { ...state }
            const tickets = action.payload.tickets
            for (let ticket of tickets) {
                ticket.Customer.location = JSON.parse(ticket.Customer.location)
                newState[ticket.id] = ticket
            }
            return newState
        }
        default:
            return state;
    }
}
