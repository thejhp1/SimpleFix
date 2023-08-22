import React from "react";
import "../../styles/components/ScheduleTechnicanRoute.css";

export default function ScheduleTechnicanRoute({
  date,
  technician,
  ticketGroup9AM,
  ticketGroup10AM,
  ticketGroup11AM,
  ticketGroup12PM,
  ticketGroup1PM,
  ticketGroup2PM,
  ticketGroup3PM,
  ticketGroup4PM,
  ticketGroup5PM,
}) {
    console.log('HERE', date)
  return (
    <section className="schedule-technician-route-container">
      <div className="schedule-technician-route_inner">
        <h1>{technician.name}</h1>
        {ticketGroup9AM.length > 0
          ? ticketGroup9AM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup10AM.length > 0
          ? ticketGroup10AM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup11AM.length > 0
          ? ticketGroup11AM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup12PM.length > 0
          ? ticketGroup12PM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup1PM.length > 0
          ? ticketGroup1PM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup2PM.length > 0
          ? ticketGroup2PM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup3PM.length > 0
          ? ticketGroup3PM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup4PM.length > 0
          ? ticketGroup4PM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
        {ticketGroup5PM.length > 0
          ? ticketGroup5PM.map((ticket) => {
              if (technician.id === ticket.Technician.id) {
                return (
                  <div key={ticket.id}>
                    <h1>{ticket.date}</h1>
                  </div>
                );
              } else {
                return <div>asd</div>;
              }
            })
          : ""}
      </div>
    </section>
  );
}
