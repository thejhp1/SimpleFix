import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetSingleTicket } from "../../store/singleTicket";
import TicketTab from "./TicketTab";
import TicketInfo from "./TicketInfo";
import "../../styles/components/Ticket.css";
import CreateTicket from "./CreateTicket";

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
  console.log(window.location.pathname === "/tickets/new");
  return (
    <>
      {window.location.pathname === "/tickets/new" ? (
        <CreateTicket />
      ) : ticket ? (
        <section className="ticket-container">
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
          <div className="ticket-tab">
            <TicketTab
              selectedTab={selectedState}
              setSelectedTab={setSelectedState}
            />
            <div className='ticket-tab-button'>
                <button>UPDATE</button>
            </div>
          </div>
          <TicketInfo
            ticket={ticket}
            selectedTab={selectedState}
            setSelectedTab={setSelectedState}
          />
        </section>
      ) : (
        ""
      )}
    </>
  );
}
