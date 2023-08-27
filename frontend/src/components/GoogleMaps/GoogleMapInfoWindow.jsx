import React, { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import "../../styles/components/GoogleMapInfoWindow.css";
import { thunkUpdateRoutePageSchedule } from "../../store/ticket";

export default function GoogleMapInfoWindow({ ticket }) {
  const dispatch = useDispatch();
  const [timeFrame, setTimeFrame] = useState(ticket?.timeFrame || "");
  const [status, setStatus] = useState(ticket?.status || "");
  const [date, setDate] = useState(
    ticket?.date
  );
  const [technician, setTechnician] = useState(ticket?.Technician?.name || "");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    setLoading(true);
    const errors = {};
    if (!date) {
      errors.date = "Input required";
    }
    if (!timeFrame) {
      errors.time = "Input required";
    }

    if (!technician) {
      errors.technician = "Input required";
    }

    if (Object.values(errors).length === 0) {
      console.log(ticket)
      const ticketUpdate = ({
        ticketId: ticket.id,
        date: dayjs(date).format("MM/DD/YY"),
        timeFrame,
        technician,
        status
      })
      dispatch(thunkUpdateRoutePageSchedule(ticketUpdate))
      setLoading(false)
    }

    setErrors(errors);
    setLoading(false);
  };

  const formatDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD")
  }

  return (
    <section className="map-info-window-container">
      <div className="map-info-window_inner">
        <div className="map-info-window-ticket">
          <h2>{ticket.number}</h2>
          <h3>
            {errors.date || errors.time || errors.status || errors.technician ? "Inputs required" : ""}
          </h3>
        </div>
        <div className="map-info-window-info-container-background">
          <div className="map-info-window-info-container-second-background">
            <div className="map-info-window-info-container">
              <div className="map-info-window-headers">
                <p>Customer:</p>
                <p>Date:</p>
                <p>Time:</p>
                <p>Address:</p>
                <p>Phone #:</p>
                <p>Status</p>
                <p>Technician:</p>
              </div>
              <div className="map-info-window-body">
                <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                <input className="map-info-inital"></input>
                <input
                  type="date"
                  className={`${errors.date ? "update-modal-error" : ""}`}
                  value={formatDate(date)}
                  onChange={(e) => setDate(e.target.value)}
                ></input>
                <select
                  className={`${errors.time ? "update-modal-error" : ""}`}
                  value={timeFrame}
                  onChange={(e) => setTimeFrame(e.target.value)}
                >
                  <option value="" disabled>
                    {ticket?.timeFrame
                      ? ticket.timeFrame
                      : "Please select a time..."}
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
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option disabled value="">

                    {ticket?.status
                      ? ticket.status
                      : "Please select a status..."}
                  </option>
                  <option>CSR-Need Schedule</option>
                  <option>CSR-Part Came In</option>
                  <option>CSR-Reschedule Done</option>
                  <option>Need Reschedule</option>
                  <option>Need Review</option>
                  <option>Waiting for Part</option>
                  <option>Ready for Service</option>
                  <option>Completed</option>
                  <option>Cancel</option>
                </select>
                <select
                  className={`${errors.technician ? "update-modal-error" : ""}`}

                  placeholder={technician}
                  value={technician}
                  onChange={(e) => setTechnician(e.target.value)}
                >
                  <option value="">Please select a technician...</option>
                  <option>Cathal</option>
                  <option>Jason</option>
                  <option>JP</option>
                  <option>Zachary</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="map-info-window-button">
          {loading ? (
            <button>
              LOADING <i className="fa-solid fa-spinner fa-spin-pulse"></i>{" "}
            </button>
          ) : (
            <button onClick={handleSubmit}>Save</button>
          )}
        </div>
      </div>
    </section>
  );
}
