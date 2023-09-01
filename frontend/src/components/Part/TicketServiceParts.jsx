import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { thunkCreatePart, thunkDeletePart } from "../../store/part";
import Pagination from "../Pagination/Pagination";
import OpenModalSpan from "../OpenModalSpan/OpenModalSpan";
import UpdatePartModal from "../UpdatePartModal/UpdatePartModal"
import "../../styles/components/TicketServiceParts.css";

export default function TicketServiceParts({ parts, ticketId }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage, setPartsPerPage] = useState(7);
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const createPart = () => {
    const errors = {};

    if (!number) {
      errors.number = "Input required";
    } else if (number.length < 2 || number.length > 50) {
      errors.number = "Input must be between 2 - 50 characters";
    }

    if (!description) {
      errors.description = "Input required";
    } else if (description.length < 2 || description.length > 50) {
      errors.description = "Input must be between 2 - 50 characters";
    }

    if (!price) {
      errors.price = "Input required";
    } else if (isNaN(price)) {
      errors.price = "Input must be a number";
    }

    if (!quantity) {
      errors.quantity = "Input required";
    } else if (isNaN(quantity)) {
      errors.quantity = "Input must be a number";
    }

    if (!status) {
      errors.status = "Input required";
    }

    if (Object.values(errors).length === 0) {
      const part = {
        number,
        description,
        price,
        quantity,
        status,
        ticketId,
      };
      setNumber("");
      setDescription("");
      setPrice("");
      setQuantity("");
      setStatus("");
      dispatch(thunkCreatePart(part, ticketId));
    }

    setErrors(errors);
  };

  const deletePart = (part) => {
    dispatch(thunkDeletePart(part));
  };

  //GET CURRENT Parts
  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = parts.slice(indexOfFirstPart, indexOfLastPart);

  //SET CURRENT PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              <h3 style={{ borderTopRightRadius: ".5rem" }}>Update/Delete</h3>
              {currentParts?.map((part, i) => {
                if (i % 2 != 0) {
                  return (
                    <>
                      <p>{part.number}</p>
                      <p>{part.description}</p>
                      <p>{part.price}</p>
                      <p>{part.quantity}</p>
                      <p>{part.status}</p>
                      <div className="part-list-options">
                        <h4>
                          <span>
                            <OpenModalSpan
                              spanText="UPDATE"
                              modalComponent={<UpdatePartModal part={part}/>}
                            />
                          </span>
                        </h4>
                        <h4 onClick={() => deletePart(part)}>DELETE</h4>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part.number}
                      </p>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part.description}
                      </p>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part.price}
                      </p>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part.quantity}
                      </p>
                      <p style={{ backgroundColor: "var(--background)" }}>
                        {part.status}
                      </p>
                      <div className="part-list-options">
                        <h4
                          style={{ backgroundColor: "var(--background)" }}
                        >
                          <span>
                            <OpenModalSpan
                              spanText="UPDATE"
                              modalComponent={<UpdatePartModal part={part}/>}
                            />
                          </span>
                        </h4>
                        <h4
                          style={{ backgroundColor: "var(--background)" }}
                          onClick={() => deletePart(part)}
                        >
                          DELETE
                        </h4>
                      </div>
                    </>
                  );
                }
              })}

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
                          errors.description ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.description ? "3px solid var(--ticket-red)" : ""
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
                          errors.price ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.price ? "3px solid var(--ticket-red)" : ""
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
                          errors.quantity ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.quantity ? "3px solid var(--ticket-red)" : ""
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
                          errors.status ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.status ? "3px solid var(--ticket-red)" : ""
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
            </div>
            <div className="error-service-tracking">
              {errors.number && (
                <p className="error-service-tracking-number">
                  <i className="fa-solid fa-circle-exclamation"></i> {errors.number}
                </p>
              )}
              {errors.description && (
                <p className="error-service-tracking-description">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.description}
                </p>
              )}
              {errors.price && (
                <p className="error-service-tracking-price">
                  <i className="fa-solid fa-circle-exclamation"></i> {errors.price}
                </p>
              )}
              {errors.quantity && (
                <p className="error-service-tracking-quantity">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.quantity}
                </p>
              )}
              {errors.status && (
                <p className="error-service-tracking-status">
                  <i className="fa-solid fa-circle-exclamation"></i> {errors.status}
                </p>
              )}
            </div>
            <div className="part-list-page-num">
              <Pagination
                totalPerPage={partsPerPage}
                totalItems={parts.length}
                paginate={paginate}
              />
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
                          errors.number ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.number ? "3px solid var(--ticket-red)" : ""
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
                          errors.description ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.description ? "3px solid var(--ticket-red)" : ""
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
                          errors.price ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.price ? "3px solid var(--ticket-red)" : ""
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
                          errors.quantity ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.quantity ? "3px solid var(--ticket-red)" : ""
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
                          errors.status ? "3px solid var(--ticket-red)" : ""
                        }`,
                      }
                    : {
                        backgroundColor: "var(--gray)",
                        color: "var(--white)",
                        border: `${
                          errors.status ? "3px solid var(--ticket-red)" : ""
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
            </div>
            <div className="error-service-tracking">
              {errors.number && (
                <p className="error-service-tracking-number">
                  <i className="fa-solid fa-circle-exclamation"></i> {errors.number}
                </p>
              )}
              {errors.description && (
                <p className="error-service-tracking-description">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.description}
                </p>
              )}
              {errors.price && (
                <p className="error-service-tracking-price">
                  <i className="fa-solid fa-circle-exclamation"></i> {errors.price}
                </p>
              )}
              {errors.quantity && (
                <p className="error-service-tracking-quantity">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.quantity}
                </p>
              )}
              {errors.status && (
                <p className="error-service-tracking-status">
                  <i className="fa-solid fa-circle-exclamation"></i> {errors.status}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
