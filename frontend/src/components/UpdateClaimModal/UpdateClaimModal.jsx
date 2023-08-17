import React, { useState } from 'react'
import { useModal } from "../../context/Modal";
import { useDispatch } from 'react-redux';
import "../../styles/components/UpdateModal.css";
import { thunkUpdatePart } from '../../store/part';
import { thunkUpdateClaim } from '../../store/claim';

export default function UpdateClaimModal({ claim, type }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [number, setNumber] = useState(claim?.number || "");
  const [laborAmount, setLaborAmount] = useState(claim?.labor || "");
  const [partAmount, setPartAmount] = useState(claim?.part|| "");
  const [mileage, setMileage] = useState(claim?.mileage || "");
  const [status, setStatus] = useState(claim?.status || "");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errors = {}

    if (!number) {
      errors.number = "Input required";
    } else if (number.length < 2 || number.length > 50) {
      errors.number = "Input must be between 2 - 50 characters";
    }

    if (!laborAmount) {
      errors.laborAmount = "Input required";
    } else if (isNaN(laborAmount)) {
      errors.laborAmount = "Input must be a number";
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

    if (Object.values(errors).length === 0) {
      const safeClaim = {
        claimId: claim.id,
        number,
        labor: laborAmount,
        part: partAmount,
        mileage,
        status,
      };
      dispatch(thunkUpdateClaim(safeClaim))
      closeModal()
    }
    setErrors(errors)
  }
  return (
    <section className='update-modal-container'>
      <div className='update-modal_tab'>
        {type === "Create" ? <p>NEW CLAIM</p> : <p>CLAIM UPDATE</p> }

      </div>
      <div className='update-modal_inner'>
        <div className='update-modal-outer-container'>
          <div className='update-modal-inner-container'>
            <div className='update-modal-headers'>
              <p>Number:</p>
              <p>Labor Amount:</p>
              <p>Part Amount:</p>
              <p>Mileage:</p>
              <p>Status:</p>

            </div>
            <div className='update-modal-input'>
              <input className={`${errors.number ? "update-modal-error" : ""}`} value={number} onChange={(e) => setNumber(e.target.value)} placeholder={claim?.number}></input>
              {errors.number && <p className="update-modal-error-number"><i class="fa-solid fa-circle-exclamation"></i> {errors.number}</p>}
              <input className={`${errors.laborAmount ? "update-modal-error" : ""}`} value={laborAmount} onChange={(e) => setLaborAmount(e.target.value)} placeholder={claim?.labor}></input>
              {errors.laborAmount && <p className="update-modal-error-description"><i class="fa-solid fa-circle-exclamation"></i> {errors.laborAmount}</p>}
              <input className={`${errors.partAmount ? "update-modal-error" : ""}`} value={partAmount} onChange={(e) => setPartAmount(e.target.value)} placeholder={claim?.part}></input>
              {errors.partAmount && <p className="update-modal-error-price"><i class="fa-solid fa-circle-exclamation"></i> {errors.partAmount}</p>}
              <input className={`${errors.mileage ? "update-modal-error" : ""}`} value={mileage} onChange={(e) => setMileage(e.target.value)} placeholder={claim?.mileage}></input>
              {errors.mileage && <p className="update-modal-error-quantity"><i class="fa-solid fa-circle-exclamation"></i> {errors.mileage}</p>}
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>
                  {claim?.status}
                </option>
                <option>Need Submit</option>
                <option>Claim Submitted</option>
                <option>Paid</option>
                <option>Rejected</option>
              </select>

            </div>
          </div>
          <button className="update-modal-button" onClick={handleSubmit}>UPDATE</button>
        </div>
      </div>
    </section>
  )
}
