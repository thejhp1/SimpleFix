import React from "react";
import "../../styles/components/TicketInfo.css";

export default function TicketInfo({ selectedTab, setSelectedTab, ticket }) {
//   console.log("TICKET", ticket)
  return (
    <>
      {selectedTab === "General" ? (
        <section className="ticket-info-container">
          <div className="ticket-info_inner">
            <h1>general</h1>
          </div>
        </section>
      ) : selectedTab === "Service" ? (
        <section className="ticket-info-container">
          <div className="ticket-info_inner">
            <h1>service</h1>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
