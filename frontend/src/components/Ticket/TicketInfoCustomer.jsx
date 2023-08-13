import React, { useEffect, useState } from "react";
import "../../styles/components/TicketInfoCustomer.css";

export default function TicketInfoCustomer({
  type,
  customer,
  handleCallback,
  setNewCustomer,
  setButtonCheck,
}) {
  const [firstName, setFirstName] = useState(customer.firstName || "");
  const [lastName, setLastName] = useState(customer.lastName || "");
  const [phone, setPhone] = useState(customer.phone || "");
  const [street, setStreet] = useState(customer.street || "");
  const [city, setCity] = useState(customer.city || "");
  const [state, setState] = useState(customer.state || "");
  const [zip, setZip] = useState(customer.zip || "");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (handleCallback) {
      const errors = {};

      if (!firstName) {
        errors.firstName = "Input required";
      } else if (firstName.length < 2 || firstName.length > 50) {
        errors.firstName = "Input must be between 2 - 50 characters";
      }

      if (!lastName) {
        errors.lastName = "Input required";
      } else if (lastName.length < 2 || lastName.length > 50) {
        errors.lastName = "Input must be between 2 - 50 characters";
      }

      if (!phone) {
        errors.phone = "Input required";
      } else if (phone.length < 10 || phone.length > 12) {
        errors.phone = "Input must be between 10 - 12 characters";
      }

      if (!street) {
        errors.street = "Input required";
      } else if (street.length < 2 || street.length > 50) {
        errors.street = "Input must be between 2 - 50 characters";
      }

      if (!city) {
        errors.city = "Input required";
      } else if (city.length < 2 || city.length > 50) {
        errors.city = "Input must be between 2 - 50 characters";
      }

      if (!state) {
        errors.state = "Input required";
      } else if (state.length < 2 || state.length > 50) {
        errors.state = "Input must be between 2 - 50 characters";
      }

      if (!zip) {
        errors.zip = "Input required";
      } else if (zip.length !== 5 || isNaN(zip)) {
        errors.zip = "Input must be a valid zip";
      }


      if (Object.values(errors).length === 0) {
        setNewCustomer({
          firstName,
          lastName,
          phone,
          street,
          state,
          city,
          zip,
        });

        return handleCallback = false
      }
      setButtonCheck(false);
      setErrors(errors);
    }
  }, [handleCallback]);

  return (
    <>
      {type === "Create" ? (
        <section className="ticket-info-customer-container">
          <div className="ticket-info-header">CUSTOMER INFORMATION</div>
          <div className="ticket-info-customer_inner">
            <div className="ticket-info-customer">
              <div className="ticket-header">
                <p>First Name: </p>
                <p>Last Name: </p>
                <p>{`Phone Number: (XXX-XXX-XXXX)`}</p>
              </div>
              <div className="ticket-input">
                <div className="product-input_inner">
                  <input
                    value={firstName}
                    style={{
                      border: `${
                        errors.firstName ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                  {errors.firstName && (
                    <p className="error-product">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={lastName}
                    style={{
                      border: `${
                        errors.lastName ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                  {errors.lastName && (
                    <p className="error-product">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.lastName}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={phone}
                    style={{
                      border: `${
                        errors.phone ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                  {errors.phone && (
                    <p className="error-product">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="ticket-info-address">
              <div className="ticket-address-container1">
              <p>Street: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={street}
                    style={{
                      border: `${
                        errors.street ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setStreet(e.target.value)}
                  ></input>
                  {errors.street && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.street}
                    </p>
                  )}
                </div>
                <p>City: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={city}
                    style={{
                      border: `${errors.city ? "3px solid var(--ticket)" : ""}`,
                    }}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                  {errors.city && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>
              <div className="ticket-address-container2">
              <p>State: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={state}
                    style={{
                      border: `${
                        errors.state ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                  {errors.state && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.state}
                    </p>
                  )}
                </div>
                <p>Zipcode: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={zip}
                    style={{
                      border: `${errors.zip ? "3px solid var(--ticket)" : ""}`,
                    }}
                    onChange={(e) => setZip(e.target.value)}
                  ></input>
                  {errors.zip && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.zip}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="ticket-info-customer-container">
          <div className="ticket-info-header">CUSTOMER INFORMATION</div>
          <div className="ticket-info-customer_inner">
            <div className="ticket-info-customer">
              <div className="ticket-header">
                <p>First Name: </p>
                <p>Last Name: </p>
                <p>Phone Number: </p>
              </div>
              <div className="ticket-input">
                <div className="product-input_inner">
                  <input
                    value={firstName}
                    style={{
                      border: `${
                        errors.firstName ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                  {errors.firstName && (
                    <p className="error-product">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={lastName}
                    style={{
                      border: `${
                        errors.lastName ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                  {errors.lastName && (
                    <p className="error-product">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.lastName}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={phone}
                    style={{
                      border: `${
                        errors.phone ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                  {errors.phone && (
                    <p className="error-product">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="ticket-info-address">
              <div className="ticket-address-container1">
                <p>State: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={street}
                    style={{
                      border: `${
                        errors.street ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setStreet(e.target.value)}
                  ></input>
                  {errors.street && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.street}
                    </p>
                  )}
                </div>
                <p>City: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={city}
                    style={{
                      border: `${errors.city ? "3px solid var(--ticket)" : ""}`,
                    }}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                  {errors.city && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>
              <div className="ticket-address-container2">
                <p>Street: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={state}
                    style={{
                      border: `${
                        errors.state ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                  {errors.state && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.state}
                    </p>
                  )}
                </div>
                <p>Zip: </p>
                <div className="ticket-address-input_inner">
                  <input
                    value={zip}
                    style={{
                      border: `${errors.zip ? "3px solid var(--ticket)" : ""}`,
                    }}
                    onChange={(e) => setZip(e.target.value)}
                  ></input>
                  {errors.zip && (
                    <p className="error-address">
                      <i class="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.zip}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
