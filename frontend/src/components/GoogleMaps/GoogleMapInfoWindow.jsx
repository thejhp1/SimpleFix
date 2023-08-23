import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import "../../styles/components/GoogleMapInfoWindow.css";

export default function GoogleMapInfoWindow({ ticket }) {
  const [timeFrame, setTimeFrame] = useState(ticket?.timeFrame || "");
  const [status, setStatus] = useState(ticket?.status || "");
  const [date, setDate] = useState( ticket?.date !== null ? dayjs(ticket.date).format('MM/DD/YYYY') : "");
  const [technician, setTechnician] = useState(ticket?.Technician?.name || "");
  const [type, setType] = useState("text")
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)

  }

  return (
    <section className="map-info-window-container">
      <div className="map-info-window_inner">
        <div className='map-info-window-ticket'>
          <h2>{ticket.number}</h2>
        </div>
        <div className='map-info-window-info-container-background'>
          <div className='map-info-window-info-container-second-background'>
            <div className='map-info-window-info-container'>
              <div className='map-info-window-headers'>
                <p>Customer:</p>
                <p>Date:</p>
                <p>Time:</p>
                <p>Address:</p>
                <p>Phone #:</p>
                <p>Status</p>
                <p>Technician:</p>
              </div>
              <div className='map-info-window-body'>
                <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                <input type={type} placeholder="mm/dd/yyyy" onFocus={() => setType('date')} onBlur={() => setType('text')} value={date} onChange={(e) => setDate((e.target.value))} style={{ backgroundColor: "var(--background)" }}></input>
                <select
                    style={{ backgroundColor: "var(--background)" }}
                    value={timeFrame}
                    onChange={(e) => setTimeFrame(e.target.value)}
                  >
                    <option value="">
                      {ticket?.timeFrame ? ticket.timeFrame : "Please select a time..."}
                    </option>
                    <option>9:00AM - 12:00PM</option>
                    <option>10:00AM - 1:00PM</option>
                    <option>11:00AM - 2:00PM</option>
                    <option>12:00PM - 3:00PM</option>
                    <option>1:00PM - 4:00PM</option>
                    <option>2:00PM - 5:00PM</option>
                    <option>3:00PM - 6:00PM</option>
                    <option>4:00PM - 7:00PM</option>
                    <option>5:00PM - 8:00PM</option>
                </select>
                <p>{`${ticket.Customer.street} ${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                <p>{ticket.Customer.phone}</p>
                <select
                    style={{ backgroundColor: "var(--background)" }}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">
                      {ticket?.status ? ticket.status : "Please select a status..."}
                    </option>
                    <option>Completed</option>
                    <option>CSR-Need Schedule</option>
                    <option>CSR-Part Came In</option>
                    <option>CSR-Reschedule Done</option>
                    <option>Need Reschedule</option>
                    <option>Need Review</option>
                    <option>Waiting for Part</option>
                    <option>Ready for Service</option>
                    <option>Cancel</option>
                </select>
                <select placeholder={technician} value={technician} onChange={(e) => setTechnician(e.target.value)} style={{ backgroundColor: "var(--background)" }}>
            <option value="" >Please select a technician...</option>
            <option>Cathal</option>
            <option>Jason</option>
            <option>JP</option>
            <option>Zachary</option>
          </select>
              </div>

            </div>

          </div>
        </div>
        <div className='map-info-window-button'>
          {loading ? <button>
                    LOADING <i className="fa-solid fa-spinner fa-spin-pulse"></i>{" "}
                  </button> : <button onClick={handleSubmit}>Save</button>}

        </div>
      </div>
    </section>
  )
}
