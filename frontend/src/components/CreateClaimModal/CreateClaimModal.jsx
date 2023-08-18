import React, { useEffect, useState } from 'react'
import { useModal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateClaim } from '../../store/claim';
import { thunkGetAllTicket } from '../../store/ticket';
import "../../styles/components/CreateClaimModal.css";



export default function CreateClaimModal({ type }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const ticketStore = useSelector(state => state.tickets)
  const tickets = Object.values(ticketStore)
  const [ticketNumber, setTicketNumber] = useState("");
  const [claimNumber, setClaimNumber] = useState("");
  const [laborAmount, setLaborAmount] = useState("");
  const [partAmount, setPartAmount] = useState("");
  const [mileage, setMileage] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(thunkGetAllTicket());
  }, [dispatch]);


  const handleSubmit = () => {
    const errors = {}

    if (!ticketNumber) {
      errors.ticketNumber = "Input required"
    }

    if (!claimNumber) {
      errors.claimNumber = "Input required";
    } else if (claimNumber.length < 2 || claimNumber.length > 50) {
      errors.claimNumber = "Input must be between 2 - 50 characters";
    }

    if (!laborAmount) {
      errors.laborAmount = "Input required";
    } else if (isNaN(laborAmount)) {
      errors.partAmount = "Input must be a number";
    }

    if (!partAmount) {
      errors.partAmount = "Input required";
    } else if (isNaN(Number(partAmount))) {
      errors.partAmount = "Input must be a number";
    }

    if (!mileage) {
      errors.mileage = "Input required";
    } else if (isNaN(mileage)) {
      errors.mileage = "Input must be a number";
    }

    if (!status) {
      errors.status = "Input required"
    }

    if (Object.values(errors).length === 0) {
      const safeClaim = {
        ticketId: ticketNumber,
        number: claimNumber,
        labor: laborAmount,
        part: partAmount,
        mileage,
        status,
      };
      dispatch(thunkCreateClaim(safeClaim))
      closeModal()
    }
    setErrors(errors)
  }

  // console.log("TICKETS", tickets.length >= 1)
  return (
    <section className='create-claim-modal-container'>
      <div className='update-modal_tab'>
        {type === "Create" ? <p>NEW CLAIM</p> : <p>CLAIM UPDATE</p> }

      </div>
      <div className='update-modal_inner'>
        <div className='update-modal-outer-container'>
          <div className='update-modal-inner-container'>
            <div className='update-modal-headers'>
              <p>Ticket Number: </p>
              <p>Claim Number:</p>
              <p>Labor Amount:</p>
              <p>Part Amount:</p>
              <p>Mileage:</p>
              <p>Status:</p>

            </div>
            <div className='update-modal-input'>
            <select
                className={`${errors.ticketNumber ? "update-modal-error" : ""}`}
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value)}
              >
                <option value="" disabled></option>
                {tickets.length >= 1 ? tickets?.map(ticket => {
                    if (ticket.status === "Completed") {
                        return <option value={ticket.id}>{ticket.number}</option>
                    }
                }) : <option disabled> Please complete a ticket first... </option>}
              </select>
              {errors.ticketNumber && <p className="create-claim-modal-error-ticketNumber"><i className="fa-solid fa-circle-exclamation"></i> {errors.ticketNumber}</p>}

              <input className={`${errors.claimNumber ? "update-modal-error" : ""}`} value={claimNumber} onChange={(e) => setClaimNumber(e.target.value)}></input>
              {errors.claimNumber && <p className="create-claim-modal-error-claimNumber"><i className="fa-solid fa-circle-exclamation"></i> {errors.claimNumber}</p>}

              <input className={`${errors.laborAmount ? "update-modal-error" : ""}`} value={laborAmount} onChange={(e) => setLaborAmount(e.target.value)}></input>
              {errors.laborAmount && <p className="create-claim-modal-error-laborAmount"><i className="fa-solid fa-circle-exclamation"></i> {errors.laborAmount}</p>}
              <input className={`${errors.partAmount ? "update-modal-error" : ""}`} value={partAmount} onChange={(e) => setPartAmount(e.target.value)}></input>
              {errors.partAmount && <p className="create-claim-modal-error-partAmount"><i className="fa-solid fa-circle-exclamation"></i> {errors.partAmount}</p>}
              <input className={`${errors.mileage ? "update-modal-error" : ""}`} value={mileage} onChange={(e) => setMileage(e.target.value)}></input>
              {errors.mileage && <p className="create-claim-modal-error-mileage"><i className="fa-solid fa-circle-exclamation"></i> {errors.mileage}</p>}
              <select
                value={status}
                className={`${errors.mileage ? "update-modal-error" : ""}`}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>
                </option>
                <option>Need Submit</option>
                <option>Claim Submitted</option>
                <option>Paid</option>
                <option>Rejected</option>
              </select>
              {errors.status && <p className="create-claim-modal-error-status"><i className="fa-solid fa-circle-exclamation"></i> {errors.status}</p>}

            </div>
          </div>
          <button className="update-modal-button" onClick={handleSubmit}>CREATE</button>
        </div>
      </div>
    </section>
  )
}
