import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TicketInfoCustomer from "./TicketInfoCustomer";
import TicketInfoProduct from "./TicketInfoProduct";
import TicketInfoService from "./TicketInfoService";
import "../../styles/components/TicketInfo.css";

export default function TicketInfo({ selectedTab, setSelectedTab, ticket }) {
  const user = useSelector((state) => state.session.user);
  const history = useHistory()

  return (
    <>
      {user ? (
        selectedTab === "General" ? (
          <section className="ticket-info-container">
            <div className="ticket-info_inner">
              <TicketInfoCustomer customer={ticket.Customer} />
              {/* <TicketInfoService /> */}
              <TicketInfoProduct product={ticket.Products[0]} />
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
        )
      ) : (
        history.push("/")
      )}
    </>
  );
}
