import React, { useEffect, useState } from "react";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllTicket } from "../../store/ticket";
import ScheduleTechnician from "./ScheduleTechnician";
import "../../styles/components/ScheduleRoutePage.css";
import dayjs from "dayjs";

export default function ScheduleRoutePage() {
  const dispatch = useDispatch();
  const ticketStore = useSelector((state) => state.tickets);
  const [date, setDate] = useState(dayjs(new Date()).format("MM/DD/YYYY"));
  const [clickOnTicket, setClickOnTicket] = useState("");

  //DIVIDE TICKETS INTO COMPLETED, PENDING AND CANCELLED
  let completedTickets = [],
    pendingTickets = [],
    cancelledTickets = [];
  for (let ticket of Object.values(ticketStore)) {
    if (ticket.status === "Completed") {
      completedTickets.push(ticket);
    } else if (ticket.status === "Cancel") {
      cancelledTickets.push(ticket);
    } else {
      pendingTickets.push(ticket);
    }
  }

  useEffect(() => {
    dispatch(thunkGetAllTicket());
  }, [dispatch]);

  const formatDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD")
  }

  return (
    <section className="schedule-route-container">
      <section className="schedule-date-container">
        <div className="schedule-date_inner">
          <div className="schedule-date-background">
            <input
              type="date"
              value={formatDate(date)}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
        </div>
      </section>
      <div className="schedule-route_inner">
        <GoogleMaps
          date={dayjs(date).format("MM/DD/YY")}
          tickets={Object.values(ticketStore)}
          clickOnTicket={clickOnTicket}
        />
        <ScheduleTechnician
          date={dayjs(date).format("MM/DD/YY")}
          completedTickets={completedTickets}
          pendingTickets={pendingTickets}
          cancelledTickets={cancelledTickets}
          setClickOnTicket={setClickOnTicket}
        />
      </div>
    </section>
  );
}
