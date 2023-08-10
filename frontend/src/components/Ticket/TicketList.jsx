import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllTicket } from "../../store/ticket";

export default function TicketList() {
  const ticketStore = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(thunkGetAllTicket())
  }, [dispatch])

  console.log("TICKETSTORE", ticketStore);

  return (
    <>
      <section className="list-template-search-container">

      </section>
      <section className="list-template-info-container">

      </section>
    </>
  );
}
