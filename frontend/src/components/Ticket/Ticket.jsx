import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetSingleTicket, thunkUpdateTicket } from "../../store/singleTicket";
import TicketTab from "./TicketTab";
import TicketInfo from "./TicketInfo";
import "../../styles/components/Ticket.css";
import CreateTicket from "./CreateTicket";

export default function Ticket() {
  const singleTicketStore = useSelector((state) => state.singleTicket);
  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const [selectedState, setSelectedState] = useState("");
  const [buttonCheck, setButtonCheck] = useState(false)
  const ticket = singleTicketStore[ticketId];
  const [ticketNumber, setTicketNumber] = useState("");
  const [updatedTicket, setUpdatedTicket] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(thunkGetSingleTicket(ticketId));
  }, [dispatch]);

  useEffect(() => {
    if (Object.values(updatedTicket).length > 1 ) {
      setLoading(true)
      dispatch(thunkUpdateTicket(updatedTicket))
    }
  }, [updatedTicket])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(ticketNumber);
    }
  };

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
                {loading ? <button>LOADING <i class="fa-solid fa-spinner fa-spin-pulse"></i> </button> : <button onClick={() => setButtonCheck(true)}>UPDATE</button> }

            </div>
          </div>
          <TicketInfo
            ticket={ticket}
            selectedTab={selectedState}
            setSelectedTab={setSelectedState}
            setButtonCheck={setButtonCheck}
            handleCallback={buttonCheck}
            setUpdatedTicket={setUpdatedTicket}
          />
        </section>
      ) : (
        ""
      )}
    </>
  );
}
