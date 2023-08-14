import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TicketInfoCustomer from "./TicketInfoCustomer";
import TicketInfoProduct from "./TicketInfoProduct";
import TicketInfoService from "./TicketInfoService";
import "../../styles/components/TicketInfo.css";
import TicketServiceParts from "../Part/TicketServiceParts";

export default function TicketInfo({
  selectedTab,
  setSelectedTab,
  ticket,
  handleCallback,
  setButtonCheck,
  setUpdatedTicket,
}) {
  const user = useSelector((state) => state.session.user);
  const history = useHistory();
  const [updateTicketCustomer, setUpdateTicketCustomer] = useState("");
  const [updateTicketProduct, setUpdateTicketProduct] = useState("");
  let updatedTicket, flag = false;


  if (Object.values(updateTicketCustomer).length > 1 && Object.values(updateTicketProduct).length > 1) {
    updatedTicket = ({...updateTicketCustomer, ...updateTicketProduct, id: ticket.id})
    flag = true
  }

  useEffect(() => {
    if (flag) {
      setUpdatedTicket(updatedTicket)
    }
    return () => flag = false
  }, [flag])

  return (
    <>
      {user ? (
        selectedTab === "General" ? (
          <section className="ticket-info-container">
            <div className="ticket-info_inner">
              <TicketInfoCustomer
                customer={ticket.Customer}
                handleCallback={handleCallback}
                setButtonCheck={setButtonCheck}
                setUpdateTicketCustomer={setUpdateTicketCustomer}
              />
              {/* <TicketInfoService /> */}
              <TicketInfoProduct
                product={ticket.Products[0]}
                handleCallback={handleCallback}
                setButtonCheck={setButtonCheck}
                setUpdateTicketProduct={setUpdateTicketProduct}
              />
            </div>
          </section>
        ) : selectedTab === "Service" ? (
          <section className="ticket-info-container">
            <div className="ticket-info_inner">
              <TicketServiceParts ticketId={ticket.id} parts={ticket.Parts} />
            </div>
          </section>
        ) : (
          ""
        )
      ) : (
        history.push("/")
      )}
    </>
  );
}
