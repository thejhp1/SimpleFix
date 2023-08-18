import React, { useState } from 'react'
import { useModal } from "../../context/Modal";
import { useDispatch } from 'react-redux';
import "../../styles/components/UpdateModal.css";
import { thunkUpdatePart } from '../../store/part';

export default function UpdatePartModal({ part }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [number, setNumber] = useState(part?.number || "");
  const [description, setDescription] = useState(part?.description || "");
  const [price, setPrice] = useState(part?.price || "");
  const [quantity, setQuantity] = useState(part?.quantity || "");
  const [status, setStatus] = useState(part?.status || "");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errors = {}

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

    if (Object.values(errors).length === 0) {
      const safePart = {
        partId: part.id,
        number,
        description,
        price,
        quantity,
        status,
      };
      dispatch(thunkUpdatePart(safePart))
      closeModal()
    }
    setErrors(errors)
  }
  return (
    <section className='update-modal-container'>
      <div className='update-modal_tab'>
        <p>PART UPDATE</p>
      </div>
      <div className='update-modal_inner'>
        <div className='update-modal-outer-container'>
          <div className='update-modal-inner-container'>
            <div className='update-modal-headers'>
              <p>Number:</p>
              <p>Description:</p>
              <p>Price:</p>
              <p>Quantity:</p>
              <p>Status:</p>

            </div>
            <div className='update-modal-input'>
              <input className={`${errors.number ? "update-modal-error" : ""}`} value={number} onChange={(e) => setNumber(e.target.value)} placeholder={part?.number}></input>
              {errors.number && <p className="update-modal-error-number"><i className="fa-solid fa-circle-exclamation"></i> {errors.number}</p>}
              <input className={`${errors.description ? "update-modal-error" : ""}`} value={description} onChange={(e) => setDescription(e.target.value)} placeholder={part?.description}></input>
              {errors.description && <p className="update-modal-error-description"><i className="fa-solid fa-circle-exclamation"></i> {errors.description}</p>}
              <input className={`${errors.price ? "update-modal-error" : ""}`} value={price} onChange={(e) => setPrice(e.target.value)} placeholder={part?.price}></input>
              {errors.price && <p className="update-modal-error-price"><i className="fa-solid fa-circle-exclamation"></i> {errors.price}</p>}
              <input className={`${errors.quantity ? "update-modal-error" : ""}`} value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={part?.quantity}></input>
              {errors.quantity && <p className="update-modal-error-quantity"><i className="fa-solid fa-circle-exclamation"></i> {errors.quantity}</p>}
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
            </div>
          </div>
          <button className="update-modal-button" onClick={handleSubmit}>UPDATE</button>
        </div>
      </div>
    </section>
  )
}
