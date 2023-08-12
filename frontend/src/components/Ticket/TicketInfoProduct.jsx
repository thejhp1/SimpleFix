import React, { useState } from "react";
import "../../styles/components/TicketInfoProduct.css";
import { useSelector } from "react-redux";

export default function TicketInfoProduct({ product }) {
  const [brand, setBrand] = useState(product.brand)
  const [model, setModel] = useState(product.modelNumber)
  const [serial, setSerial] = useState(product.serialNumber)
  const [installDate, setInstallDate] = useState(product.installDate)
  const [warrantyStatus, setWarrantyStatus] = useState(product.warrantyStatus)
  const [category, setCategory] = useState(product.category)

  return (
    <section className="ticket-info-product-container">
      <div className="ticket-info-header">PRODUCT INFORMATION</div>
      <div className="ticket-info-product_inner">
        <div className="ticket-info-product">
          <div className="product-header">
            <p>Brand: </p>
            <p>Model Number: </p>
            <p>Serial Number: </p>
          </div>
          <div className="product-input">
            <input value={brand} onChange={(e) => setBrand(e.target.value)}></input>
            <input value={model} onChange={(e) => setModel(e.target.value)}></input>
            <input value={serial} onChange={(e) => setSerial(e.target.value)}></input>
          </div>
        </div>
        <div className="ticket-info-product">
          <div className="product-header">
            <p>Install Date: </p>
            <p>Warranty Status: </p>
            <p>Product Category: </p>
          </div>
          <div className="product-input">
            <input value={installDate} disabled={true} style={{backgroundColor:"var(--white)", color:"var(--black)"}} ></input>
            <input value={warrantyStatus} disabled={true} style={{backgroundColor:"var(--white)", color:"var(--black)"}}></input>
            <input value={category} disabled={true} style={{backgroundColor:"var(--white)", color:"var(--black)"}}></input>
          </div>
        </div>
      </div>
    </section>
  );
}
