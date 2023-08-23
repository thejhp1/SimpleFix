import React from 'react'
import "../../styles/components/GoogleMapInfoWindow.css";

export default function GoogleMapInfoWindow({ ticket }) {
  console.log("TICKET", ticket)
  return (
    <section className="map-info-window-container">
      <div className="map-info-window_inner">
        <div className='asdasd'>
          <h2>{ticket.number}</h2>
        </div>
        <div className='asdzxc'>
          <div className='zxczxc'>
            <p>Customer:</p>
            <p>Date:</p>
            <p>Time:</p>
            <p>Address:</p>
            <p>Phone Number:</p>
            <p>Status</p>
            <p>Technician:</p>

          </div>
          <div className='zxczxczxc'>
            <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
            <input></input>
            <input></input>
            <p>{`${ticket.Customer.street} ${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
            <p>{ticket.Customer.phone}</p>
            <p>{ticket.status}</p>
            <input></input>
          </div>
        </div>
      </div>
    </section>
  )
}
