import React, { useState } from 'react'
import "../../styles/components/ScheduleTechnician.css";
import { useSelector } from 'react-redux';

export default function ScheduleTechnician() {
  const technician = useSelector((state) => state.session.user.technicians)
  console.log("TECHNICIANS", technician)
  return (
    <section className='technician-container'>
        <div className='technician_inner'>
            ScheduleRoute
            {technician?.map(tech => {
              return (
                <div key={tech.id}>
                  <p>{tech.name}</p>
                </div>
              )
            })}
        </div>
    </section>
  )
}
