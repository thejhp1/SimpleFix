import React, { useState } from "react";
import "../../styles/components/TicketServiceParts.css";

export default function TicketServiceParts({ type, parts }) {
  const [number, setNumber] = useState(parts?.number || "");
  const [description, setDescription] = useState(parts?.description || "");
  const [price, setPrice] = useState(parts?.price || "");
  const [quantity, setQuantity] = useState(parts?.quantity || "");
  const [status, setStatus] = useState(parts?.status || "");
  const [errors, setErrors] = useState({});
  return (
    <>
      {parts.length >= 1 ? (
        <section className="ticket-info-part-container">
          <div className="ticket-info-header">PART INFORMATION</div>
          <div className="ticket-info-part_inner">
            <div className="ticket-part-header">
              <h3 style={{ borderTopLeftRadius: ".5rem" }}>Number</h3>
              <h3>Description</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Status</h3>
              <h3 style={{ borderTopRightRadius: ".5rem" }}>DELETE</h3>
              {parts?.map((part, i) => {
                if (i % 2 != 0) {
                  return (
                    <>
                      <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder={part?.number}></input>
                      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder={part?.description}></input>
                      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder={part?.price}></input>
                      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={part?.quantity}></input>
                      <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled>
                          {part?.status}
                        </option>
                        <option>Need PO</option>
                        <option>Waiting for Part</option>
                        <option>Part Ready</option>
                        <option>Backordered</option>
                        <option>Used</option>
                      </select>
                      <h4
                        style={{
                          color: "var(--primary-light)",
                        }}
                      >
                        DELETE
                      </h4>
                    </>
                  );
                } else {
                  return (
                    <>
                      <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder={part?.number} style={{ backgroundColor: "var(--background)" }}></input>
                      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder={part?.description} style={{ backgroundColor: "var(--background)" }}></input>
                      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder={part?.price} style={{ backgroundColor: "var(--background)" }}></input>
                      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={part?.quantity} style={{ backgroundColor: "var(--background)" }}></input>
                      <select value={status} onChange={(e) => setStatus(e.target.value)} style={{backgroundColor: "var(--background)"}}>
                        <option value="" disabled>
                          {part?.status}
                        </option>
                        <option>Need PO</option>
                        <option>Waiting for Part</option>
                        <option>Part Ready</option>
                        <option>Backordered</option>
                        <option>Used</option>
                      </select>
                      <h4
                        style={{
                          backgroundColor: "var(--background)",
                          color: "var(--primary-light)",
                        }}
                      >
                        DELETE
                      </h4>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="ticket-info-part-container">
        <div className="ticket-info-header">PART INFORMATION</div>
        <div className="ticket-info-part_inner">
          <div className="ticket-part-header">
            <h3 style={{ borderTopLeftRadius: ".5rem" }}>Number</h3>
            <h3>Description</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Status</h3>
            <h3 style={{ borderTopRightRadius: ".5rem", boxShadow:"4px 5px 5px var(--black)" }}>DELETE</h3>
            <input style={{ backgroundColor: "var(--background)" }} placeholder="NO PART"></input>
            <input style={{ backgroundColor: "var(--background)" }} placeholder="NO PART"></input>
            <input style={{ backgroundColor: "var(--background)" }} placeholder="NO PART"></input>
            <input style={{ backgroundColor: "var(--background)" }} placeholder="NO PART"></input>
            <input style={{ backgroundColor: "var(--background)" }} placeholder="NO PART"></input>
            <input style={{ backgroundColor: "var(--background)" }} placeholder="NO PART"></input>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
