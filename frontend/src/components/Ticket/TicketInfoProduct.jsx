import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "../../styles/components/TicketInfoProduct.css";

export default function TicketInfoProduct({
  type,
  product,
  handleCallback,
  setNewProduct,
  setButtonCheck,
  setUpdateTicketProduct,

}) {
  const [brand, setBrand] = useState(product.brand || "");
  const [model, setModel] = useState(product.modelNumber || "");
  const [serial, setSerial] = useState(product.serialNumber || "");
  const [installDate, setInstallDate] = useState(product.installDate || "");
  const [warrantyStatus, setWarrantyStatus] = useState(
    product.warrantyStatus || ""
  );
  const [category, setCategory] = useState(product.category || "");
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (handleCallback) {
      const errors = {};
      if (!brand) {
        errors.brand = "Input required";
      } else if (brand.length < 2 || brand.length > 50) {
        errors.brand = "Input must be between 2 - 50 characters";
      }

      if (!model) {
        errors.model = "Input required";
      } else if (model.length < 2 || model.length > 50) {
        errors.model = "Input must be between 2 - 50 characters";
      }

      if (!serial) {
        errors.serial = "Input required";
      } else if (serial.length < 2 || serial.length > 50) {
        errors.serial = "Input must be between 2 - 50 characters";
      }

      if (!installDate) {
        errors.installDate = "Input required";
      } else if (installDate.length !== 8) {
        errors.installDate = "Please format as MM/DD/YY"
      } else if (installDate.split("/").length !== 3) {
        errors.installDate = "Please format as MM/DD/YY"
      } else if (installDate.split("/")[2] > dayjs(new Date()).format('MM/DD/YY').split("/")[2]) {
        errors.installDate = "Date cannot be in the future"
      } else if (installDate.split("/")[2] === dayjs(new Date()).format('MM/DD/YY').split("/")[2]) {
        if (installDate.split("/")[0] > dayjs(new Date()).format('MM/DD/YY').split("/")[0]) {
          errors.installDate = "Date cannot be in the future"
        } else if (installDate.split("/")[0] === dayjs(new Date()).format('MM/DD/YY').split("/")[0]) {
          if (installDate.split("/")[1] > dayjs(new Date()).format('MM/DD/YY').split("/")[1]) {
            errors.installDate = "Date cannot be in the future"
          }
        }
      }

      if (!warrantyStatus) {
        errors.warrantyStatus = "Input required";
      } else if (warrantyStatus === "In Warranty" && (dayjs(new Date()).format('MM/DD/YY').split("/")[2] - installDate.split("/")[2] > 1)) {
        errors.warrantyStatus = "Install date must be within 1 year for In Warranty";
      } else if (warrantyStatus === "In Warranty" && (dayjs(new Date()).format('MM/DD/YY').split("/")[2] - installDate.split("/")[2] === 1)) {
        if (installDate.split("/")[0] < dayjs(new Date()).format('MM/DD/YY').split("/")[0] || installDate.split("/")[1] < dayjs(new Date()).format('MM/DD/YY').split("/")[1]) {
          errors.warrantyStatus = "Install date must be within 1 year for In Warranty";
        }
      }

      if (!category) {
        errors.category = "Input required";
      }

      if (Object.values(errors).length === 0) {
        if (type === "Create") {
          setNewProduct({
            brand,
            model,
            serial,
            installDate,
            warrantyStatus,
            category
          })
        } else {
          setUpdateTicketProduct({
            brand,
            model,
            serial,
            installDate,
            warrantyStatus,
            category
          })
        }
        // return handleCallback = false
      }

      setButtonCheck(false);
      setErrors(errors);
    }

  }, [handleCallback]);

  return (
    <>
      {type === "Create" ? (
        <section className="ticket-info-product-container">
          <div className="ticket-info-header">PRODUCT INFORMATION</div>
          <div className="ticket-info-product_inner">
            <div className="ticket-info-product">
              <div className="product-header">
                <p>Brand: </p>
                <p>Model Number: </p>
                <p>Serial Number: </p>
              </div>
              <div className="product-input-container">
                <div className="product-input_inner">
                  <input
                    value={brand}
                    style={{
                      border: `${
                        errors.brand ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setBrand(e.target.value)}
                  ></input>
                  {errors.brand && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.brand}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={model}
                    style={{
                      border: `${
                        errors.model ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setModel(e.target.value)}
                  ></input>
                  {errors.model && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.model}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={serial}
                    style={{
                      border: `${
                        errors.serial ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setSerial(e.target.value)}
                  ></input>
                  {errors.serial && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.serial}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="ticket-info-product">
              <div className="product-header">
                <p>{"Install Date: (MM/DD/YY)"}</p>
                <p>Warranty Status: </p>
                <p>Product Category: </p>
              </div>
              <div className="product-input-container">
                <div className="product-input_inner">
                  <input
                    value={installDate}
                    style={{
                      border: `${
                        errors.installDate ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setInstallDate(e.target.value)}
                  ></input>
                  {errors.installDate && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.installDate}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <select
                    value={warrantyStatus}
                    style={{
                      border: `${
                        errors.warrantyStatus ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setWarrantyStatus(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a warranty status...
                    </option>
                    <option>In Warranty</option>
                    <option>Out of Warranty</option>
                  </select>
                  {errors.warrantyStatus && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.warrantyStatus}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <select
                    value={category}
                    style={{
                      border: `${
                        errors.category ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                  <option value="" disabled>
                      Select a product category...
                    </option>
                    <option>Refrigeration</option>
                    <option>Kitchen</option>
                    <option>Laundry - Electric</option>
                    <option>Laundry - Gas</option>
                    <option>Cooking - Electric</option>
                    <option>Cooking - Gas</option>
                  </select>
                  {errors.category && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="ticket-info-product-container">
          <div className="ticket-info-header">PRODUCT INFORMATION</div>
          <div className="ticket-info-product_inner">
            <div className="ticket-info-product">
              <div className="product-header">
                <p>Brand: </p>
                <p>Model Number: </p>
                <p>Serial Number: </p>
              </div>
              <div className="product-input-container">
                <div className="product-input_inner">
                  <input
                    value={brand}
                    style={{
                      border: `${
                        errors.brand ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setBrand(e.target.value)}
                  ></input>
                  {errors.brand && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.brand}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={model}
                    style={{
                      border: `${
                        errors.model ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setModel(e.target.value)}
                  ></input>
                  {errors.model && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.model}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <input
                    value={serial}
                    style={{
                      border: `${
                        errors.serial ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setSerial(e.target.value)}
                  ></input>
                  {errors.serial && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.serial}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="ticket-info-product">
              <div className="product-header">
                <p>{"Install Date: (MM/DD/YY)"}</p>
                <p>Warranty Status: </p>
                <p>Product Category: </p>
              </div>
              <div className="product-input-container">
                <div className="product-input_inner">
                  <input
                    value={installDate}
                    style={{
                      border: `${
                        errors.installDate ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setInstallDate(e.target.value)}
                  ></input>
                  {errors.installDate && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.installDate}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <select
                    value={warrantyStatus}
                    style={{
                      border: `${
                        errors.warrantyStatus ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setWarrantyStatus(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a warranty status...
                    </option>
                    <option>In Warranty</option>
                    <option>Out of Warranty</option>
                  </select>
                  {errors.warrantyStatus && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.warrantyStatus}
                    </p>
                  )}
                </div>
                <div className="product-input_inner">
                  <select
                    value={category}
                    style={{
                      border: `${
                        errors.category ? "3px solid var(--ticket)" : ""
                      }`,
                    }}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                  <option value="" disabled>
                      Select a product category...
                    </option>
                    <option>Refrigeration</option>
                    <option>Kitchen</option>
                    <option>Laundry - Electric</option>
                    <option>Laundry - Gas</option>
                    <option>Cooking - Electric</option>
                    <option>Cooking - Gas</option>
                  </select>
                  {errors.category && (
                    <p className="error-product">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {errors.category}
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
