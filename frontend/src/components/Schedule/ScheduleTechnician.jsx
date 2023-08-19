import React, { useState } from 'react'
import "../../styles/components/ScheduleTechnician.css";
import { useSelector } from 'react-redux';

export default function ScheduleTechnician({ completedTickets, pendingTickets, cancelledTickets }) {
  const technician = useSelector((state) => state.session.user.technicians)


  for (let i = 0; i < technician.length; i++) {
    const tickets = pendingTickets.map(ticket => {
      if (ticket.Technician?.id === technician[i].id) {
        return ticket
      }
    })
    return
  }
  const renderContent = () => {

  }
  return (
    <section className='technician-container'>
        <div className='technician_inner'>
            {renderContent()}

        </div>
    </section>
  )
}
