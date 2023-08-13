import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetAllTicket } from "../../store/ticket";
import Pagination from "../Pagination/Pagination";
import "../../styles/components/TicketList.css"

export default function TicketList() {
  const ticketStore = useSelector((state) => state.tickets);
  const history = useHistory();
  const dispatch = useDispatch();
  const tickets = Object.values(ticketStore)
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(20);

  useEffect(() => {
    dispatch(thunkGetAllTicket())
  }, [dispatch])

  let completedTickets = [], pendingTickets = [], cancelledTickets = []
  for (let ticket of tickets) {
    if (ticket.status === "Completed") {
        completedTickets.push(ticket)
    } else if (ticket.status === "Cancel") {
        cancelledTickets.push(ticket)
    } else {
        pendingTickets.push(ticket)
    }
  }

  //GET CURRENT TICKETS
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = pendingTickets.slice(indexOfFirstTicket, indexOfLastTicket)

  //SET CURRENT PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //SEND TO THE TICKET DETAILS
  const sendToTicket = (ticketId) => {
    history.push(`tickets/${ticketId}`)
  }

  return (
    <>
      <section className="list-template-header-container">

      </section>
      <section className="list-template-search-container">
        <section className="ticket-list-search-container">
            <div className="ticket-list-search_inner">
                <h1>TO DO SEARCH CONTAINER</h1>
            </div>
        </section>
      </section>
      <section className="list-template-info-container">
        <section className="ticket-list-container">
            <div className="ticket-list_inner">
                <h3 style={{borderTopLeftRadius:".5rem"}}>Ticket Number</h3>
                <h3>Customer Name</h3>
                <h3>City</h3>
                <h3>State</h3>
                <h3>Phone Number</h3>
                <h3>Model Number</h3>
                <h3 style={{borderTopRightRadius:".5rem"}}>Status</h3>
                {currentTickets?.map((ticket, i) => {
                    console.log("TICKET", ticket)
                    if (i % 2 != 0) {
                        return (
                            <>
                                <p style={{backgroundColor:"var(--gray)", color:"var(--primary-light)", fontWeight:"700"}}>
                                    <div className="ticket-list-ticket-num" onClick={() => sendToTicket(ticket.id)} >
                                        {ticket?.number}
                                    </div>
                                </p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.firstName} {ticket?.Customer.lastName}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.city}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.state}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.phone}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Products[0].modelNumber}</p>
                                <p style={{backgroundColor:"var(--gray)", color:"var(--primary-light)", fontWeight:"700"}}>{ticket?.status}</p>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <p className="ticket-list-ticket-red">
                                    <div className="ticket-list-ticket-num" onClick={() => sendToTicket(ticket.id)} >
                                        {ticket?.number}
                                    </div>
                                </p>
                                <p>{ticket?.Customer.firstName} {ticket?.Customer.lastName}</p>
                                <p>{ticket?.Customer.city}</p>
                                <p>{ticket?.Customer.state}</p>
                                <p>{ticket?.Customer.phone}</p>
                                <p>{ticket?.Products[0].modelNumber}</p>
                                <p className="ticket-list-ticket-red">{ticket?.status}</p>
                            </>
                        )
                    }

                 }
                )}
            </div>
            <section className="ticket-list-page-num-container">
                <div className="ticket-list-ticket-count">
                    <p>Tickets Found: {pendingTickets.length}</p>
                </div>
                <div className="ticket-list-page-num">
                    <Pagination ticketsPerPage={ticketsPerPage} totalTickets={pendingTickets.length} paginate={paginate}/>
                </div>
            </section>
        </section>
      </section>
    </>
  );
}
