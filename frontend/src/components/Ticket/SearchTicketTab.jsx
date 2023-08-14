import React, { useEffect, useState } from "react";

export default function SearchTicketTab({ selectedTab, setSelectedTab }) {
  useEffect(() => {
    setSelectedTab("Pending");
  }, [setSelectedTab]);
  
  return (
    <section className="ticket-tab-container">
      <div className="ticket-tab_inner">
        <span
          onClick={() => setSelectedTab("Pending")}
          className={
            selectedTab === "Pending"
              ? "active ticket-tab-general-information-container"
              : "ticket-tab-general-information-container"
          }
        >
          <div className="ticket-tab-general-information_inner">
            Open/Pending
          </div>
        </span>
        <span
          onClick={() => setSelectedTab("Cancelled")}
          className={
            selectedTab === "Cancelled"
              ? "active ticket-tab-service-tracking-container"
              : "ticket-tab-service-tracking-container"
          }
        >
          <div className="ticket-tab-service-tracking_inner">
            Cancelled
          </div>
        </span>
        <span
          onClick={() => setSelectedTab("Completed")}
          className={
            selectedTab === "Completed"
              ? "active ticket-tab-service-tracking-container"
              : "ticket-tab-service-tracking-container"
          }
        >
          <div className="ticket-tab-service-tracking_inner">
            Completed
          </div>
        </span>
      </div>
    </section>
  );
}
