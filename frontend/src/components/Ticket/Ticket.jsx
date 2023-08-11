import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetSingleTicket } from "../../store/singleTicket";
import TicketTab from "./TicketTab";
import TicketInfo from "./TicketInfo";
import "../../styles/components/Ticket.css";

export default function Ticket() {
  const singleTicketStore = useSelector((state) => state.singleTicket);
  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const [selectedState, setSelectedState] = useState("");
  const ticket = singleTicketStore[ticketId];
  const [ticketNumber, setTicketNumber] = useState("");

  useEffect(() => {
    dispatch(thunkGetSingleTicket(ticketId));
  }, [dispatch]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(ticketNumber);
    }
  };

  return (
    <>
      {ticket ? <section className="ticket-container">
        <section className="ticket-search-container">
          <div className="ticket-search_inner">
            <div className="ticket-search-input">
              <p>Ticket #: </p>
              <input
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                  setTicketNumber(e.target.value);
                }}
                value={ticketNumber || ticket?.number}
              ></input>
            </div>
          </div>
        </section>
        <TicketTab
          selectedTab={selectedState}
          setSelectedTab={setSelectedState}
        />
        <TicketInfo
          ticket={ticket}
          selectedTab={selectedState}
          setSelectedTab={setSelectedState}
        />
      </section> : ""}
    </>
  );
}
