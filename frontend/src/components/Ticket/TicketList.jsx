import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { thunkGetAllTicket } from "../../store/ticket";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import dayjs from "dayjs";
import SearchTicketTab from "./SearchTicketTab";
import "../../styles/components/TicketList.css";

export default function TicketList() {
  const ticketStore = useSelector((state) => state.tickets);
  const history = useHistory();
  const dispatch = useDispatch();
  const tickets = Object.values(ticketStore);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(20);
  const [selectedState, setSelectedState] = useState("Pending");
  const [searchInput, setSearchInput] = useState("");
  const [searchDateRange, setSearchDateRange] = useState("")
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
      dispatch(thunkGetAllTicket());
  }, [dispatch]);

  //DIVIDE TICKETS INTO COMPLETED, PENDING AND CANCELLED
  let completedTickets = [],
    pendingTickets = [],
    cancelledTickets = [];
  for (let ticket of tickets) {
    if (ticket.status === "Completed") {
      completedTickets.push(ticket);
    } else if (ticket.status === "Cancel") {
      cancelledTickets.push(ticket);
    } else {
      pendingTickets.push(ticket);
    }
  }

  useEffect(() => {
    if (searchInput.length > 1) {
      setFiltered (
        pendingTickets.filter((ticket) => {
          for (let ticketValue of Object.values(ticket)) {
            if (ticketValue !== null) {
              if (typeof ticketValue == 'object' && !Array.isArray(ticketValue)) {
                for (let ticketObjectValue of Object.values(ticketValue)) {
                  if (ticketObjectValue.toString().toLowerCase().includes(searchInput.toLowerCase())) {
                    return ticket
                  }
                }
              } else if (Array.isArray(ticketValue)) {
                for (let ticketObject of ticketValue) {
                  for (let ticketArrayValue of Object.values(ticketObject)) {
                    if (ticketArrayValue !== null) {
                      if (ticketArrayValue.toString().toLowerCase().includes(searchInput.toLowerCase())) {
                        return ticket
                      }
                    }
                  }
                }
              } else if (ticketValue.toString().toLowerCase().includes(searchInput.toLowerCase())) {
                return ticket
              }
            }
          }
        })
      )
    }
  }, [searchInput])

  //DECIDES WHICH LIST OF TICKETS TO RENDER
  let ticketList;
  if (Object.values(filtered).length >= 1) {
    ticketList = filtered
  } else if (selectedState === "Pending") {
    ticketList = pendingTickets;
  } else if (selectedState === "Cancelled") {
    ticketList = cancelledTickets;
  } else if (selectedState === "Completed") {
    ticketList = completedTickets;
  }

  //GET CURRENT TICKETS
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = ticketList.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );

  //SET CURRENT PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //SEND TO THE TICKET DETAILS
  const sendToTicket = (ticketId) => {
    history.push(`tickets/${ticketId}`);
  };

  return (
    <>
      <section className="list-template-header-container">
        <div className="list-template-header_inner">
          <SearchTicketTab
            selectedTab={selectedState}
            setSelectedTab={setSelectedState}
          />
        </div>
      </section>
      <section className="list-template-search-container">
        <section className="ticket-list-search-container">
          <div className="ticket-list-search_inner">
            <Search
              setSearchInput={setSearchInput}
              setSearchDateRange={setSearchDateRange}
              setFiltered={setFiltered}
            />
          </div>
        </section>
      </section>
      <section className="list-template-info-container">
        <section className="ticket-list-container">
          <div className="ticket-list_inner">
            <h3 style={{ borderTopLeftRadius: ".5rem" }}>Ticket Number</h3>
            <h3>Customer Name</h3>
            <h3>City</h3>
            <h3>State</h3>
            <h3>Phone Number</h3>
            <h3>Model Number</h3>
            <h3>TAT</h3>
            <h3 style={{ borderTopRightRadius: ".5rem" }}>Status</h3>
            {selectedState === "Pending"
              ? currentTickets?.map((ticket, i) => {
                  if (i % 2 != 0) {
                    return (
                      <>
                        <p
                          style={{
                            backgroundColor: "var(--gray)",
                            color: "var(--primary-light)",
                            fontWeight: "700",
                          }}
                        >
                          <div
                            className="ticket-list-ticket-num"
                            onClick={() => sendToTicket(ticket.id)}
                          >
                            {ticket?.number}
                          </div>
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.firstName}{" "}
                          {ticket?.Customer.lastName}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.city}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.state}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.phone}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Products[0].modelNumber}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {dayjs(new Date()).diff(
                            dayjs(ticket?.createdAt),
                            "day"
                          )}
                        </p>
                        <p
                          style={{
                            backgroundColor: "var(--gray)",
                            color: "var(--primary-light)",
                            fontWeight: "700",
                          }}
                        >
                          {ticket?.status}
                        </p>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <p className="ticket-list-ticket-red">
                          <div
                            className="ticket-list-ticket-num"
                            onClick={() => sendToTicket(ticket.id)}
                          >
                            {ticket?.number}
                          </div>
                        </p>
                        <p>
                          {ticket?.Customer.firstName}{" "}
                          {ticket?.Customer.lastName}
                        </p>
                        <p>{ticket?.Customer.city}</p>
                        <p>{ticket?.Customer.state}</p>
                        <p>{ticket?.Customer.phone}</p>
                        <p>{ticket?.Products[0].modelNumber}</p>
                        <p>
                        {dayjs(new Date()).diff(
                            dayjs(ticket?.createdAt),
                            "day"
                          )}
                        </p>

                        <p className="ticket-list-ticket-red">
                          {ticket?.status}
                        </p>
                      </>
                    );
                  }
                })
              : selectedState === "Cancelled"
              ? cancelledTickets?.map((ticket, i) => {
                  if (i % 2 != 0) {
                    return (
                      <>
                        <p
                          style={{
                            backgroundColor: "var(--gray)",
                            color: "var(--primary-light)",
                            fontWeight: "700",
                          }}
                        >
                          <div
                            className="ticket-list-ticket-num"
                            // TO DO REFACTOR DEPENDING ON WHAT DIRECTION
                            onClick={() => sendToTicket(ticket.id)}
                          >
                            {ticket?.number}
                          </div>
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.firstName}{" "}
                          {ticket?.Customer.lastName}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.city}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.state}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.phone}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Products[0].modelNumber}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {" "}
                          {dayjs(new Date()).diff(
                            dayjs(ticket?.createdAt),
                            "day"
                          )}
                        </p>

                        <p
                          style={{
                            backgroundColor: "var(--gray)",
                            color: "var(--primary-light)",
                            fontWeight: "700",
                          }}
                        >
                          {ticket?.status}
                        </p>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <p className="ticket-list-ticket-red">
                          <div
                            className="ticket-list-ticket-num"
                            // TO DO REFACTOR DEPENDING ON WHAT DIRECTION
                            onClick={() => sendToTicket(ticket.id)}
                          >
                            {ticket?.number}
                          </div>
                        </p>
                        <p>
                          {ticket?.Customer.firstName}{" "}
                          {ticket?.Customer.lastName}
                        </p>
                        <p>{ticket?.Customer.city}</p>
                        <p>{ticket?.Customer.state}</p>
                        <p>{ticket?.Customer.phone}</p>
                        <p>{ticket?.Products[0].modelNumber}</p>
                        <p>
                          {dayjs(new Date()).diff(
                            dayjs(ticket?.createdAt),
                            "day"
                          )}
                        </p>
                        <p className="ticket-list-ticket-red">
                          {ticket?.status}
                        </p>
                      </>
                    );
                  }
                })
              : selectedState === "Completed"
              ? completedTickets?.map((ticket, i) => {
                  if (i % 2 != 0) {
                    return (
                      <>
                        <p
                          style={{
                            backgroundColor: "var(--gray)",
                            color: "var(--primary-light)",
                            fontWeight: "700",
                          }}
                        >
                          <div
                            className="ticket-list-ticket-num"
                            // TO DO REFACTOR DEPENDING ON WHAT DIRECTION
                            onClick={() => sendToTicket(ticket.id)}
                          >
                            {ticket?.number}
                          </div>
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.firstName}{" "}
                          {ticket?.Customer.lastName}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.city}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.state}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Customer.phone}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {ticket?.Products[0].modelNumber}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                        {dayjs(new Date()).diff(
                            dayjs(ticket?.createdAt),
                            "day"
                          )}
                        </p>

                        <p
                          style={{
                            backgroundColor: "var(--gray)",
                            color: "var(--primary-light)",
                            fontWeight: "700",
                          }}
                        >
                          {ticket?.status}
                        </p>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <p className="ticket-list-ticket-red">
                          <div
                            className="ticket-list-ticket-num"
                            // TO DO REFACTOR DEPENDING ON WHAT DIRECTION
                            onClick={() => sendToTicket(ticket.id)}
                          >
                            {ticket?.number}
                          </div>
                        </p>
                        <p>
                          {ticket?.Customer.firstName}{" "}
                          {ticket?.Customer.lastName}
                        </p>
                        <p>{ticket?.Customer.city}</p>
                        <p>{ticket?.Customer.state}</p>
                        <p>{ticket?.Customer.phone}</p>
                        <p>{ticket?.Products[0].modelNumber}</p>
                        <p>
                          {dayjs(new Date()).diff(
                            dayjs(ticket?.createdAt),
                            "day"
                          )}
                        </p>
                        <p className="ticket-list-ticket-red">
                          {ticket?.status}
                        </p>
                      </>
                    );
                  }
                })
              : ""}
          </div>
          <section className="ticket-list-page-num-container">
            <div className="ticket-list-ticket-count">
              <p>Tickets Found: {ticketList.length}</p>
            </div>
            <div className="ticket-list-page-num">
              <Pagination
                totalPerPage={ticketsPerPage}
                totalItems={ticketList.length}
                paginate={paginate}
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
