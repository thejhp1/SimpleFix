const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const GET_ALL_TICKET = "ticket/getAllTicket"
const GET_SINGLE_TICKET = "singleTicket/getSingleTicket"
const CREATE_TICKET = "singleTicket/createTicket"
const UPDATE_TICKET = "singleTicket/updateTicket"
const GET_ALL_PART = "part/getAllPart"
const CREATE_PART = "part/createPart"
const DELETE_PART = "part/deletePart"
const UPDATE_PART = "part/updatePart"
const GET_ALL_CLAIM = "claim/getAllClaim"
const CREATE_CLAIM = "claim/createClaim"
const UPDATE_CLAIM = "claim/updateClaim"
const UPDATE_SCHEDULE = "singleTicket/updateSchedule"
const GET_ADDRESS = "googleMap/getAddress"

export const actionTypes = {
  SET_USER,
  REMOVE_USER,
  GET_ALL_TICKET,
  GET_SINGLE_TICKET,
  CREATE_TICKET,
  UPDATE_TICKET,
  GET_ALL_PART,
  CREATE_PART,
  DELETE_PART,
  UPDATE_PART,
  GET_ALL_CLAIM,
  CREATE_CLAIM,
  UPDATE_CLAIM,
  UPDATE_SCHEDULE,
  GET_ADDRESS
};
