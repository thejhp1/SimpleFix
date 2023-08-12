import React from "react";
import { useHistory } from "react-router-dom";

export default function MainPageTicket() {
  const history = useHistory();

  const sendToTicketList = () => {
    history.push("/tickets")
  }

  const sendToCreateTicket = () => {
    history.push("/tickets/new")
  }

  return (
    <div className="main-page-body_inner">
      <img style={{ marginTop: "-4rem" }} src="/images/MainPage_Ticket.png" />
      <h1>TICKET</h1>
      <div className="main-page-body-options-container">
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p onClick={sendToTicketList}>TICKET LIST</p>
        </div>
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p onClick={sendToCreateTicket}>NEW TICKET</p>
        </div>
      </div>
    </div>
  );
}
