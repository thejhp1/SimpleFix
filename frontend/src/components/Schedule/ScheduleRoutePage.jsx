import React, { useEffect, useState } from "react";
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllTicket } from "../../store/ticket";
import ScheduleTechnician from "./ScheduleTechnician";

export default function ScheduleRoutePage() {
  const dispatch = useDispatch();
  const ticketStore = useSelector((state) => state.tickets);

  //DIVIDE TICKETS INTO COMPLETED, PENDING AND CANCELLED
  let completedTickets = [],
  pendingTickets = [],
  cancelledTickets = [];
  for (let ticket of Object.values(ticketStore)) {
  if (ticket.status === "Completed") {
    completedTickets.push(ticket);
  } else if (ticket.status === "Cancel") {
    cancelledTickets.push(ticket);
  } else {
    pendingTickets.push(ticket);
  }
  }
  // import { thunkGetAddress } from '../../store/googleMap'
  // const asdasd = () => {
    // return dispatch(thunkGetAddress())
  // }
  useEffect(() => {
    dispatch(thunkGetAllTicket());
  }, [dispatch]);

  return (
    <section className='schedule-route-container'>
      <div className='schedule-route_inner'>
        <GoogleMaps completedTickets={completedTickets} pendingTickets={pendingTickets} cancelledTickets={cancelledTickets}/>
        <ScheduleTechnician completedTickets={completedTickets} pendingTickets={pendingTickets} cancelledTickets={cancelledTickets}/>
      </div>
    </section>
  )
}
