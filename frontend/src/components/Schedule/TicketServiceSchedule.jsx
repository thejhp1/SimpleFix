import React, { useState } from "react";

export default function TicketServiceSchedule({ ticket }) {
  const [date, setDate] = useState(ticket?.date || "");
  const [timeFrame, setTimeFrame] = useState(ticket?.timeFrame || "");
  const [technician, setTechnician] = useState(ticket?.Technician?.name || "");
  const [note, setNote] = useState(ticket?.note || "");
  const [status, setStatus] = useState(ticket?.status || "");

  console.log("TICKET", ticket)
  return (
    <section className="ticket-info-part-container">
      <div className="ticket-info-header">SCHEDULE INFORMATION</div>
      <div className="ticket-info-part_inner">
        <div className="ticket-part-header">
          <h3 style={{ borderTopLeftRadius: ".5rem" }}>Date</h3>
          <h3>Time</h3>
          <h3>Technician</h3>
          <h3>Note</h3>
          <h3>Status</h3>
          <h3
            style={{
              borderTopRightRadius: ".5rem",
              boxShadow: "4px 5px 5px var(--black)",
            }}
          >
            Update/Delete
          </h3>
          <input placeholder={date} value={date} onChange={(e) => setDate(e.target.value)} style={{ backgroundColor: "var(--background)" }}></input>
          <select
              style={{ backgroundColor: "var(--background)" }}
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <option value="" disabled>
                {ticket?.timeFrame}
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
          <input placeholder={technician} value={technician} onChange={(e) => setTechnician(e.target.value)}  style={{ backgroundColor: "var(--background)" }}></input>
          <input placeholder={ticket?.note} value={note} onChange={(e) => setNote(e.target.value)}  style={{ backgroundColor: "var(--background)" }}></input>
           <select
              style={{ backgroundColor: "var(--background)" }}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                {ticket?.status}
              </option>
              <option>Completed</option>
              <option>CSR-Need Schedule</option>
              <option>CSR-Part Came In</option>
              <option>CSR-Reschedule Done</option>
              <option>Need Reschedule</option>
              <option>Need Review</option>
              <option>Cancel</option>
          </select>
          <div className="part-list-options">
            <h4
              style={{ backgroundColor: "var(--background)" }}
              // onClick={() => deletePart(part)}
            >
              UPDATE
            </h4>
            <h4
              style={{ backgroundColor: "var(--background)" }}
              // onClick={() => deletePart(part)}
            >
              DELETE
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
