import React, { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreatePart } from "../../store/part";
import { thunkGetAllTicket } from "../../store/ticket";
import "../../styles/components/CreatePartModal.css";

export default function CreatePartModal() {
  const { closeModal } = useModal();
  const history = useHistory();
  const dispatch = useDispatch();
  const ticketStore = useSelector((state) => state.tickets);
  const tickets = Object.values(ticketStore);
  const [ticketNumber, setTicketNumber] = useState("");
  const [partNumber, setPartNumber] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(thunkGetAllTicket());
  }, [dispatch]);

  const handleSubmit = () => {
    const errors = {};

    if (!ticketNumber) {
      errors.ticketNumber = "Input required";
    }

    if (!partNumber) {
      errors.partNumber = "Input required";
    } else if (partNumber.length < 2 || partNumber.length > 50) {
      errors.partNumber = "Input must be between 2 - 50 characters";
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
      const safePart = {
        ticketId: ticketNumber,
        number: partNumber,
        description,
        price,
        quantity,
        status,
      };
      dispatch(thunkCreatePart(safePart));
      closeModal();
      history.push(`/tickets/${ticketNumber}`);
    }
    setErrors(errors);
  };

  return (
    <section className="create-part-modal-container">
      <div className="update-modal_tab">
        <p>NEW PART</p>
      </div>
      <div className="update-modal_inner">
        <div className="update-modal-outer-container">
          <div className="create-part-modal-inner-container">
            <div className="update-modal-headers">
              <p>Ticket Number:</p>
              <p>Part Number:</p>
              <p>Description:</p>
              <p>Price:</p>
              <p>Quantity:</p>
              <p>Status:</p>
            </div>
            <div className="update-modal-input">
              <select
                className={`${errors.partNumber ? "update-modal-error" : ""}`}
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value)}
              >
                <option value="" disabled></option>
                {tickets?.map((ticket) => {
                  let counter = 0;
                  if (
                    ticket.status !== "Completed" &&
                    ticket.status !== "Cancel"
                  ) {
                    counter++;
                    return <option value={ticket.id}>{ticket.number}</option>;
                  }
                  if (counter === 0) {
                    return <option>Please create an open ticket...</option>
                  }
                })}
              </select>
              {errors.ticketNumber && (
                <p className="create-part-modal-error-ticketNumber">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.ticketNumber}
                </p>
              )}
              <input
                className={`${errors.partNumber ? "update-modal-error" : ""}`}
                value={partNumber}
                onChange={(e) => setPartNumber(e.target.value)}
              ></input>
              {errors.partNumber && (
                <p className="create-part-modal-error-partNumber">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.partNumber}
                </p>
              )}
              <input
                className={`${errors.description ? "update-modal-error" : ""}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
              {errors.description && (
                <p className="create-part-modal-error-description">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.description}
                </p>
              )}
              <input
                className={`${errors.price ? "update-modal-error" : ""}`}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              {errors.price && (
                <p className="create-part-modal-error-price">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.price}
                </p>
              )}
              <input
                className={`${errors.quantity ? "update-modal-error" : ""}`}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
              {errors.quantity && (
                <p className="create-part-modal-error-quantity">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.quantity}
                </p>
              )}
              <select
                className={`${errors.status ? "update-modal-error" : ""}`}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled></option>
                <option>Need PO</option>
                <option>Waiting for Part</option>
                <option>Part Ready</option>
                <option>Backordered</option>
                <option>Used</option>
              </select>
              {errors.status && (
                <p className="create-part-modal-error-status">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.status}
                </p>
              )}
            </div>
          </div>
          <button className="update-modal-button" onClick={handleSubmit}>
            CREATE
          </button>
        </div>
      </div>
    </section>
  );
}
