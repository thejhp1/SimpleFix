import React from 'react'

export default function Schedule({ ticket }) {
    console.log("TICKET", ticket)
  return (
    <section className="ticket-info-part-container">
    <div className="ticket-info-header">SCHEDULE INFORMATION</div>
    <div className="ticket-info-part_inner">
      {/* <div className="ticket-part-header">
        <h3 style={{ borderTopLeftRadius: ".5rem" }}>Number</h3>
        <h3>Description</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Status</h3>
        <h3
          style={{
            borderTopRightRadius: ".5rem",
            boxShadow: "4px 5px 5px var(--black)",
          }}
        >
          Update/Delete
        </h3>
        <input
          style={{ backgroundColor: "var(--gray)" }}
          placeholder="NO PART"
          disabled
        ></input>
        <input
          style={{ backgroundColor: "var(--gray)" }}
          placeholder="NO PART"
          disabled
        ></input>
        <input
          style={{ backgroundColor: "var(--gray)" }}
          placeholder="NO PART"
          disabled
        ></input>
        <input
          style={{ backgroundColor: "var(--gray)" }}
          placeholder="NO PART"
          disabled
        ></input>
        <input
          style={{ backgroundColor: "var(--gray)" }}
          placeholder="NO PART"
          disabled
        ></input>
        <input
          style={{ backgroundColor: "var(--gray)" }}
          placeholder="NO PART"
          disabled
        ></input>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={
            parts.length % 2 === 0
              ? {
                  backgroundColor: "var(--background)",
                  color: "var(--white)",
                  border: `${
                    errors.number ? "3px solid var(--ticket)" : ""
                  }`,
                }
              : {
                  backgroundColor: "var(--gray)",
                  color: "var(--white)",
                  border: `${
                    errors.number ? "3px solid var(--ticket)" : ""
                  }`,
                }
          }
          placeholder="Please add part number..."
        ></input>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={
            parts.length % 2 === 0
              ? {
                  backgroundColor: "var(--background)",
                  color: "var(--white)",
                  border: `${
                    errors.description ? "3px solid var(--ticket)" : ""
                  }`,
                }
              : {
                  backgroundColor: "var(--gray)",
                  color: "var(--white)",
                  border: `${
                    errors.description ? "3px solid var(--ticket)" : ""
                  }`,
                }
          }
          placeholder="Please add part description..."
        ></input>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={
            parts.length % 2 === 0
              ? {
                  backgroundColor: "var(--background)",
                  color: "var(--white)",
                  border: `${
                    errors.price ? "3px solid var(--ticket)" : ""
                  }`,
                }
              : {
                  backgroundColor: "var(--gray)",
                  color: "var(--white)",
                  border: `${
                    errors.price ? "3px solid var(--ticket)" : ""
                  }`,
                }
          }
          placeholder="Please add part price..."
        ></input>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={
            parts.length % 2 === 0
              ? {
                  backgroundColor: "var(--background)",
                  color: "var(--white)",
                  border: `${
                    errors.quantity ? "3px solid var(--ticket)" : ""
                  }`,
                }
              : {
                  backgroundColor: "var(--gray)",
                  color: "var(--white)",
                  border: `${
                    errors.quantity ? "3px solid var(--ticket)" : ""
                  }`,
                }
          }
          placeholder="Please add part quantity..."
        ></input>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={
            parts.length % 2 === 0
              ? {
                  backgroundColor: "var(--background)",
                  color: "var(--white)",
                  border: `${
                    errors.status ? "3px solid var(--ticket)" : ""
                  }`,
                }
              : {
                  backgroundColor: "var(--gray)",
                  color: "var(--white)",
                  border: `${
                    errors.status ? "3px solid var(--ticket)" : ""
                  }`,
                }
          }
        >
          <option value="" disabled>
            Please add part status...
          </option>
          <option>Need PO</option>
          <option>Waiting for Part</option>
          <option>Part Ready</option>
          <option>Backordered</option>
          <option>Used</option>
        </select>
        <div className="part-list-options">
          <h4
            onClick={createPart}
            style={
              parts.length % 2 === 0
                ? {
                    backgroundColor: "var(--background)",
                    color: "var(--primary-light)",
                  }
                : {
                    backgroundColor: "var(--gray)",
                    color: "var(--primary-light)",
                  }
            }
          >
            ADD
          </h4>
        </div>
      </div> */}

    </div>
  </section>
  )
}
