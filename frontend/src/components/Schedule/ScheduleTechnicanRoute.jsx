import React from "react";
// import { closestCenter, DndContext } from "@dnd-kit/core";
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
  return (
    <section className="schedule-technician-route-container">
      <div className="schedule-technician-route_inner">
        <div className="schedule-time-dark-container">
          <p>9:00AM - 12:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup9AM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-light-container">
          <p>10:00AM - 1:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup10AM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info-light" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-dark-container">
          <p>11:00AM - 2:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup11AM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-light-container">
          <p>12:00PM - 3:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup12PM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-dark-container">
          <p>1:00PM - 4:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup1PM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-light-container">
          <p>2:00PM - 5:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup2PM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-dark-container">
          <p>3:00PM - 6:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup3PM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-light-container">
          <p>4:00PM - 7:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup4PM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="schedule-time-dark-container">
          <p>5:00PM - 8:00PM</p>
          <div className="schedule-ticket-info-container">
            {ticketGroup5PM.map((ticket) => {
              if (
                technician.id === ticket.Technician.id &&
                ticket.date === date
              ) {
                return (
                  <div className="schedule-ticket-info" key={ticket.id}>
                    <p>{ticket.number}</p>
                    <p>{ticket.status}</p>
                    <p>{`${ticket.Customer.city} ${ticket.Customer.state} ${ticket.Customer.zip}`}</p>
                    <p>{`${ticket.Customer.firstName} ${ticket.Customer.lastName}`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
