import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllTicket } from "../../store/ticket";
import "../../styles/components/TicketList.css"

export default function TicketList() {
  const ticketStore = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const tickets = Object.values(ticketStore)

  useEffect(() => {
    dispatch(thunkGetAllTicket())
  }, [dispatch])

  console.log("TICKETSTORE", tickets);

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
                {tickets.map((ticket) => {
                    //NEED TO REFACTOR
                    if (ticket.id % 2 === 0) {
                        return (
                            <>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.number}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.firstName} {ticket?.Customer.lastName}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.city}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.state}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Customer.phone}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.Products[0].modelNumber}</p>
                                <p style={{backgroundColor:"var(--gray)"}}>{ticket?.status}</p>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <p>{ticket?.number}</p>
                                <p>{ticket?.Customer.firstName} {ticket?.Customer.lastName}</p>
                                <p>{ticket?.Customer.city}</p>
                                <p>{ticket?.Customer.state}</p>
                                <p>{ticket?.Customer.phone}</p>
                                <p>{ticket?.Products[0].modelNumber}</p>
                                <p>{ticket?.status}</p>
                            </>
                        )
                    }

                }

                )}
            </div>
            <section className="ticket-list-page-num--container">
                <div className="ticket-list-page-num_inner">
                    1 2 3 4 5 6 7 8 9 10
                </div>
            </section>
        </section>
      </section>
    </>
  );
}
