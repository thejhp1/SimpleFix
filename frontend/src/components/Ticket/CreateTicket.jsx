import React, { useState } from "react";
import CreateTicketTab from "./CreateTicketTab";

import "../../styles/components/TicketTab.css"
import "../../styles/components/CreateTicket.css";
import TicketInfoProduct from "./TicketInfoProduct";
import TicketInfoCustomer from "./TicketInfoCustomer";


export default function CreateTicket() {
  const [ticketNumber, setTicketNumber] = useState("");
  const [buttonCheck, setButtonCheck] = useState(false)
  const [newCustomer, setNewCustomer] = useState("")
  const [newProduct, setNewProduct] = useState("")

  console.log('NEW CX',newCustomer)
  console.log('NEW PRODUCT', newProduct)

  return (
    <section className="create-ticket-container">
      <section className="create-ticket_inner">
        <div className="ticket-search_inner">
          <div className="ticket-search-input">
            <p>Ticket #: </p>
            <input
              onChange={(e) => {
                setTicketNumber(e.target.value);
              }}
              value={ticketNumber}
            ></input>
          </div>
        </div>
      </section>
        <div className="ticket-tab">
            <CreateTicketTab />
            <div className='ticket-tab-button'>
                <button onClick={() => setButtonCheck(true)}>CREATE</button>
            </div>
        </div>
        <div className="create-ticket-form-container ">
            <TicketInfoCustomer type={"Create"} customer={""} handleCallback={buttonCheck} setNewCustomer={setNewCustomer} setButtonCheck={setButtonCheck}/>
            <TicketInfoProduct type={"Create"} product={""} handleCallback={buttonCheck} setNewProduct={setNewProduct} setButtonCheck={setButtonCheck}/>
        </div>
    </section>
  );
}
