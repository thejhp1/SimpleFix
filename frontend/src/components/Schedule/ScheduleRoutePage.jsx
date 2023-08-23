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
  const [type, setType] = useState("date");

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

  return (
    <section className="schedule-route-container">
      <section className="schedule-date-container">
        <div className="schedule-date_inner">
          <div className="schedule-date-background">
            <input
              // type="date"
              // onFocus={() => setType("date")}
              // onBlur={() => setType("text")}
              placeholder={date}
              value={date}
              onChange={(e) => setDate(dayjs(e.target.value).format("MM/DD/YYYY"))}
              type={type}
            ></input>
          </div>
        </div>
      </section>
      <div className="schedule-route_inner">
        <GoogleMaps
          completedTickets={completedTickets}
          pendingTickets={pendingTickets}
          cancelledTickets={cancelledTickets}
        />
        <ScheduleTechnician
          date={dayjs(date).format("MM/DD/YY")}
          completedTickets={completedTickets}
          pendingTickets={pendingTickets}
          cancelledTickets={cancelledTickets}
        />
      </div>
    </section>
  );
}
