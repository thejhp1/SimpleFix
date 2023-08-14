import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../styles/components/TicketServiceParts.css";
import { thunkCreatePart } from "../../store/part";

export default function TicketServiceParts({ type, parts, ticketId }) {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(parts?.number || "");
  const [description, setDescription] = useState(parts?.description || "");
  const [price, setPrice] = useState(parts?.price || "");
  const [quantity, setQuantity] = useState(parts?.quantity || "");
  const [status, setStatus] = useState(parts?.status || "");
  const [updateNumber, setUpdateNumber] = useState(parts?.number || "");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateQuantity, setUpdateQuantity] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [errors, setErrors] = useState({});

  const createPart = () => {
    const errors = {};

    if (!updateNumber) {
      errors.number = "Input required";
    } else if (updateNumber.length < 2 || updateNumber.length > 50) {
      errors.number = "Input must be between 2 - 50 characters";
    }

    if (!updateDescription) {
      errors.description = "Input required";
    } else if (updateDescription.length < 2 || updateDescription.length > 50) {
      errors.description = "Input must be between 2 - 50 characters";
    }

    if (!updatePrice) {
      errors.price = "Input required";
    } else if (isNaN(updatePrice)) {
      errors.price = "Input must be a number"
    }

    if (!updateQuantity) {
      errors.quantity = "Input required";
    } else if (isNaN(updateQuantity)) {
      errors.quantity = "Input must be a number"
    }

    if (!updateStatus) {
      errors.status = "Input required";
    }

    if (Object.values(errors).length === 0) {
      const part = {
        number: updateNumber,
        description: updateDescription,
        price: updatePrice,
        quantity: updateQuantity,
        status: updateStatus,
        ticketId
      };
      setUpdateNumber("")
      setUpdateDescription("")
      setUpdatePrice("")
      setUpdateQuantity("")
      setUpdateStatus("")
      dispatch(thunkCreatePart(part, ticketId));
    }

    setErrors(errors);
  };

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
                      <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder={part?.number}
                      ></input>
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={part?.description}
                      ></input>
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder={part?.price}
                      ></input>
                      <input
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder={part?.quantity}
                      ></input>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
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
                      <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder={part?.number}
                        style={{ backgroundColor: "var(--background)" }}
                      ></input>
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={part?.description}
                        style={{ backgroundColor: "var(--background)" }}
                      ></input>
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder={part?.price}
                        style={{ backgroundColor: "var(--background)" }}
                      ></input>
                      <input
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder={part?.quantity}
                        style={{ backgroundColor: "var(--background)" }}
                      ></input>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={{ backgroundColor: "var(--background)" }}
                      >
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
              <input
                value={updateNumber}
                onChange={(e) => setUpdateNumber(e.target.value)}
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
                value={updateDescription}
                onChange={(e) => setUpdateDescription(e.target.value)}
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
                value={updatePrice}
                onChange={(e) => setUpdatePrice(e.target.value)}
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
                value={updateQuantity}
                onChange={(e) => setUpdateQuantity(e.target.value)}
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
                value={updateStatus}
                onChange={(e) => setUpdateStatus(e.target.value)}
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
            <div className="error-service-tracking">
              {errors.number && (
                <p>
                  <i class="fa-solid fa-circle-exclamation"></i> {errors.number}
                </p>
              )}
              {errors.description && (
                <p className="aaaaaaaa">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.description}
                </p>
              )}
              {errors.price && (
                <p className="aaaaaaaa">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.price}
                </p>
              )}
              {errors.quantity && (
                <p className="aaaaaaaa">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.quantity}
                </p>
              )}
              {errors.status && (
                <p className="aaaaaaaa">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.status}
                </p>
              )}
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
              <h3
                style={{
                  borderTopRightRadius: ".5rem",
                  boxShadow: "4px 5px 5px var(--black)",
                }}
              >
                DELETE
              </h3>
              <input
                style={{ backgroundColor: "var(--gray)" }}
                placeholder="NO PART"
              ></input>
              <input
                style={{ backgroundColor: "var(--gray)" }}
                placeholder="NO PART"
              ></input>
              <input
                style={{ backgroundColor: "var(--gray)" }}
                placeholder="NO PART"
              ></input>
              <input
                style={{ backgroundColor: "var(--gray)" }}
                placeholder="NO PART"
              ></input>
              <input
                style={{ backgroundColor: "var(--gray)" }}
                placeholder="NO PART"
              ></input>
              <input
                style={{ backgroundColor: "var(--gray)" }}
                placeholder="NO PART"
              ></input>
              <input
                value={updateNumber}
                onChange={(e) => setUpdateNumber(e.target.value)}
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
                value={updateDescription}
                onChange={(e) => setUpdateDescription(e.target.value)}
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
                value={updatePrice}
                onChange={(e) => setUpdatePrice(e.target.value)}
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
                value={updateQuantity}
                onChange={(e) => setUpdateQuantity(e.target.value)}
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
                value={updateStatus}
                onChange={(e) => setUpdateStatus(e.target.value)}
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
              </h4>
            </div>

          </div>
        </section>
      )}
    </>
  );
}
