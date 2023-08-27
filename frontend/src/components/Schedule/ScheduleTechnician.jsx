import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ScheduleTechnicanRoute from './ScheduleTechnicanRoute';
import "../../styles/components/ScheduleTechnician.css";

export default function ScheduleTechnician({ date, completedTickets, pendingTickets, cancelledTickets, setClickOnTicket }) {
  const technician = useSelector((state) => state.session.user.technicians)
  let ticketGroup9AM = [], ticketGroup10AM = [], ticketGroup11AM = [], ticketGroup12PM = [], ticketGroup1PM = [], ticketGroup2PM = [], ticketGroup3PM = [], ticketGroup4PM = [], ticketGroup5PM = []

  for (let ticket of pendingTickets) {
    if (ticket.timeFrame !== null) {
      if (ticket.timeFrame.startsWith("9:00")) {
        ticketGroup9AM.push(ticket)
      } else if (ticket.timeFrame.startsWith("10:00")) {
        ticketGroup10AM.push(ticket)
      } else if (ticket.timeFrame.startsWith("11:00")) {
        ticketGroup11AM.push(ticket)
      } else if (ticket.timeFrame.startsWith("12:00")) {
        ticketGroup12PM.push(ticket)
      } else if (ticket.timeFrame.startsWith("1:00")) {
        ticketGroup1PM.push(ticket)
      } else if (ticket.timeFrame.startsWith("2:00")) {
        ticketGroup2PM.push(ticket)
      } else if (ticket.timeFrame.startsWith("3:00")) {
        ticketGroup3PM.push(ticket)
      } else if (ticket.timeFrame.startsWith("4:00")) {
        ticketGroup4PM.push(ticket)
      } else if (ticket.timeFrame.startsWith("5:00")) {
        ticketGroup5PM.push(ticket)
      }

    }
  }

  return (
    <section className='technician-container'>
        <div className='technician_inner'>
          {technician.map(tech => {
            return (
              <div className='technician-name' key={tech.id}>
                <h1>{tech.name}</h1>
               <ScheduleTechnicanRoute setClickOnTicket={setClickOnTicket} date={date} technician={tech} ticketGroup9AM={ticketGroup9AM} ticketGroup10AM={ticketGroup10AM} ticketGroup11AM={ticketGroup11AM} ticketGroup12PM={ticketGroup12PM} ticketGroup1PM={ticketGroup1PM} ticketGroup2PM={ticketGroup2PM} ticketGroup3PM={ticketGroup3PM} ticketGroup4PM={ticketGroup4PM} ticketGroup5PM={ticketGroup5PM} />
              </div>
            )
          })}

        </div>
    </section>
  )
}
