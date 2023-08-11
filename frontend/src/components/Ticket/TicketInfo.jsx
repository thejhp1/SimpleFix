import React from "react";
import "../../styles/components/TicketInfo.css";
import TicketInfoCustomer from "./TicketInfoCustomer";
import TicketInfoProduct from "./TicketInfoProduct";
import TicketInfoService from "./TicketInfoService";

export default function TicketInfo({ selectedTab, setSelectedTab, ticket }) {
//   console.log("TICKET", ticket)
  return (
    <>
      {selectedTab === "General" ? (
        <section className="ticket-info-container">
          <div className="ticket-info_inner">
              <TicketInfoCustomer />
              <TicketInfoProduct />
              <TicketInfoService />
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
