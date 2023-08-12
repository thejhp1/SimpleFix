import React, { useEffect, useState } from "react";
import "../../styles/components/TicketInfoCustomer.css";

export default function TicketInfoCustomer({ type, customer, handleCallback, setNewCustomer, setButtonCheck }) {
  const [firstName, setFirstName] = useState(customer.firstName || "")
  const [lastName, setLastName] = useState(customer.lastName || "")
  const [phone, setPhone] = useState(customer.phone || "")
  const [street, setStreet] = useState(customer.street || "")
  const [city, setCity] = useState(customer.city || "")
  const [state, setState] = useState(customer.state || "")
  const [zip, setZip] = useState(customer.zip || "")

  useEffect(() => {
    if (handleCallback) {
      if (!firstName) {
        setButtonCheck(false)
      } else {
        setNewCustomer({
          firstName,
          lastName,
          phone,
          street,
          state,
          city,
          zip
        })
      }
    }
  }, [handleCallback])

  return (
    <>
      { type === "Create" ?    <section className="ticket-info-customer-container">
      <div className="ticket-info-header">CUSTOMER INFORMATION</div>
      <div className="ticket-info-customer_inner">
        <div className="ticket-info-customer">
          <div className="ticket-header">
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Phone Number: </p>
          </div>
          <div className="ticket-input">
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}></input>
          </div>
        </div>
        <div className="ticket-info-address">
          <div className="ticket-header">
            <p>Street: </p>
            <p>State: </p>
            <p>City: </p>
            <p>Zip: </p>
          </div>
          <div className="ticket-input">
            <input value={street} onChange={(e) => setStreet(e.target.value)}></input>
            <input value={city} onChange={(e) => setCity(e.target.value)}></input>
            <input value={state} onChange={(e) => setState(e.target.value)}></input>
            <input value={zip} onChange={(e) => setZip(e.target.value)}></input>
          </div>
        </div>
      </div>
    </section> : <section className="ticket-info-customer-container">
      <div className="ticket-info-header">CUSTOMER INFORMATION</div>
      <div className="ticket-info-customer_inner">
        <div className="ticket-info-customer">
          <div className="ticket-header">
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Phone Number: </p>
          </div>
          <div className="ticket-input">
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}></input>
          </div>
        </div>
        <div className="ticket-info-address">
          <div className="ticket-header">
            <p>Street: </p>
            <p>State: </p>
            <p>City: </p>
            <p>Zip: </p>
          </div>
          <div className="ticket-input">
            <input value={street} onChange={(e) => setStreet(e.target.value)}></input>
            <input value={city} onChange={(e) => setCity(e.target.value)}></input>
            <input value={state} onChange={(e) => setState(e.target.value)}></input>
            <input value={zip} onChange={(e) => setZip(e.target.value)}></input>
          </div>
        </div>
      </div>
    </section>}
    </>

  );
}
