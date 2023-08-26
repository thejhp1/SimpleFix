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

const updateSchedule = (schedule) => {
    return {
        type: actionTypes.UPDATE_SCHEDULE,
        payload: schedule
    }
}

const getAddress = (address) =>  {
    return {
        type: actionTypes.GET_ADDRESS,
        payload: address
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
    let addressData
    try {
        const resAddress = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${ticket.street} ${ticket.city} ${ticket.state} ${ticket.zip}&key=${import.meta.env.VITE_GOOGLE_MAP_API_UNRESTRICT}`)
        if (resAddress.ok) {
            addressData = await resAddress.json();
        }
    } catch (error) {
        return e
    }
    if (addressData) {
        ticket["location"] = JSON.stringify(addressData.results[0].geometry.location)
    }
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

export const thunkUpdateSchedule = (schedule) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/tickets/schedule/${schedule.ticketId}`, {
            method: "PUT",
            body: JSON.stringify(schedule)
        })
        if (res.ok) {
            const data = await res.json();
            dispatch(updateSchedule(data));
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
            }aa
            return newState
        }
        case actionTypes.UPDATE_SCHEDULE: {
            const newState = { ...state }
            const schedule = action.payload.schedule
            newState[schedule.id].Customer.location = JSON.parse(schedule["Customer"].location)
            if (schedule.technidianId) {
                newState[schedule.id].technidianId = schedule.technidianId
            }
            if (schedule.note) {
                newState[schedule.id].note = schedule.note
            }
            if (schedule.date !== "Invalid Date") {
                newState[schedule.id].date = schedule.date
            }
            if (schedule.timeFrame) {
                newState[schedule.id].timeFrame = schedule.timeFrame
            }
            return newState
        }
        case actionTypes.GET_ADDRESS: {
            const newState = { ...state }
            const address = action.payload.results[0]
            newState["location"] = address.geometry.location
            return newState
        }
        default:
            return state;
    }
}
