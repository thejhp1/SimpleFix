import React from 'react'
import "../../styles/components/GoogleMapInfoWindow.css";

export default function GoogleMapInfoWindow({ ticket }) {
  return (
    <section className="map-info-window-container">
        <div className="map-info-window_inner">
        <p>{ticket.number}</p>
        </div>
    </section>
  )
}
