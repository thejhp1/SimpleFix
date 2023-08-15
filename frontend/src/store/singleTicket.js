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
        case actionTypes.CREATE_PART: {
            const newState = { ...state }
            const part = action.payload.part
            newState[part.ticketId].Parts.push(part)
            return newState
        }
        case actionTypes.DELETE_PART: {
            const newState = { ...state }
            const part = action.payload
            for (let i = 0; i < newState[part.ticketId].Parts.length; i++) {
                const ele = newState[part.ticketId].Parts[i]
                if (part.id === ele.id) {
                    delete newState[part.ticketId].Parts[i]
                }
            }
            return newState
        }
        case actionTypes.UPDATE_PART: {
            const newState = { ...state }
            const part = action.payload.part
            for (let i = 0; i < newState[part.ticketId].Parts.length; i++) {
                let ele = newState[part.ticketId].Parts[i]
                if (part.id === ele.id) {
                    ele.number = part.number
                    ele.description = part.description
                    ele.price = part.price
                    ele.quantity = part.quantity
                    ele.status = part.status
                }
            }
            return newState
        }
        default:
            return state;
    }
}
