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
      {parts.lengths <= 0 ? (
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
                      <p>{part?.number}</p>
                      <p>{part?.description}</p>
                      <p>{part?.price}</p>
                      <p>{part?.quantity}</p>
                      <select>
                        <option value="" disabled>
                          {part?.status}
                        </option>
                        <option>Need PO</option>
                        <option>Waiting for Part</option>
                        <option>Part Ready</option>
                        <option>Backordered</option>
                        <option>Used</option>
                      </select>
                      <h4>DELETE</h4>
                    </>
                  );
                } else {
                  return (
                    <>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part?.number}
                      </p>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part?.description}
                      </p>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part?.price}
                      </p>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part?.quantity}
                      </p>
                      <select style={{ backgroundColor: "var(--background)" }}>
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
            <h3 style={{ borderTopRightRadius: ".5rem" }}>DELETE</h3>
            <p style={{ backgroundColor: "var(--background)" }}>NO PARTS</p>
            <p style={{ backgroundColor: "var(--background)" }}>NO PARTS</p>
            <p style={{ backgroundColor: "var(--background)" }}>NO PARTS</p>
            <p style={{ backgroundColor: "var(--background)" }}>NO PARTS</p>
            <p style={{ backgroundColor: "var(--background)" }}>NO PARTS</p>
            <p style={{ backgroundColor: "var(--background)" }}>NO PARTS</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
