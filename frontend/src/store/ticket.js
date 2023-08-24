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

const updateRoutePageSchedule = (ticket) => {
    return {
        type: actionTypes.UPDATE_ROUTE_PAGE_SCHEDULE,
        payload: ticket
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

export const thunkUpdateRoutePageSchedule = (schedule) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/tickets/schedule/${schedule.ticketId}`, {
            method: "PUT",
            body: JSON.stringify(schedule)
        })
        if (res.ok) {
            const data = await res.json();
            dispatch(updateRoutePageSchedule(data));
        }
    } catch (e) {
        return e
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
        case actionTypes.UPDATE_ROUTE_PAGE_SCHEDULE: {
            const newState = { ...state }
            const schedule = action.payload.schedule
            newState[schedule.id] = {...schedule}
            newState[schedule.id].Customer.location = JSON.parse(schedule["Customer"].location)
            return newState
        }
        default:
            return state;
    }
}
