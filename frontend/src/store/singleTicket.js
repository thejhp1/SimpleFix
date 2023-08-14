import { actionTypes } from "./actionTypes";
import { csrfFetch } from "./csrf";

const initialState = {};

// normal action creator
const getSingleTicket = (tickets) =>  {
    return {
        type: actionTypes.GET_SINGLE_TICKET,
        payload: tickets
    }
}

const createTicket = (ticket) => {
    return {
        type: actionTypes.CREATE_TICKET,
        payload: ticket
    }
}

const updateTicket = (ticket) => {
    return {
        type: actionTypes.UPDATE_TICKET,
        payload: ticket
    }
}

// thunk action creator
export const thunkGetSingleTicket = (ticketId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/tickets/${ticketId}`)

        if (res.ok) {
            const data = await res.json();
            dispatch(getSingleTicket(data));
            return data
        }

    } catch (e) {
        if (e.status > 400) {
            return window.location.href = ("/")
        }
        return e
    }
}

export const thunkCreateTicket = (ticket) => async (dispatch) => {
    try {
        const res = await csrfFetch('/api/tickets/', {
            method: "POST",
            body: JSON.stringify(ticket)
        })
        if (res.ok) {
            const data = await res.json();
            dispatch(createTicket(data));
            return window.location.href = (`/tickets/${data.ticket.id}`)
        }
    } catch (e) {
        return e
    }
}

export const thunkUpdateTicket = (ticket) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/tickets/${ticket.id}`, {
            method: "PUT",
            body: JSON.stringify(ticket)
        })
        if (res.ok) {
            const data = await res.json();
            dispatch(updateTicket(data));
            return window.location.href = (`/tickets/${data.ticket.id}`)
        }
    } catch (e) {
        return e
    }
}

export default function singleTicketReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_SINGLE_TICKET: {
            const newState = { ...state }
            const ticket = action.payload.ticket
            newState[ticket.id] = ticket
            return newState
        }
        case actionTypes.CREATE_TICKET: {
            const newState = { ...state }
            const ticket = action.payload.ticket
            newState[ticket.id] = ticket
            return newState
        }
        case actionTypes.UPDATE_TICKET: {
            const newState = { ...state }
            newState[action.payload.ticket.id] = action.payload.ticket
            return newState
        }
        default:
            return state;
    }
}
