import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetAllPart } from "../../store/part";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import "../../styles/components/PartList.css";

export default function PartList() {
  const partStore = useSelector((state) => state.parts);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const parts = Object.values(partStore);
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage, setPartsPerPage] = useState(20);
  const [searchInput, setSearchInput] = useState("");
  const [searchDateRange, setSearchDateRange] = useState("")
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    dispatch(thunkGetAllPart());
  }, [dispatch]);

  let partList = [];
  for (let part of parts) {
    if (part.Ticket.employeeId === user.id) {
      partList.push(part);
    }
  }

  //GET CURRENT PARTS
  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = partList.slice(indexOfFirstPart, indexOfLastPart);

  useEffect(() => {
    if (searchInput.length > 1) {
      setFiltered(
        currentParts.filter((part) => {
          for (let partValue of Object.values(part)) {
            if (partValue !== null) {
              if (typeof partValue == 'object' && !Array.isArray(partValue)) {
                const obj = Object.values(partValue)
                for (let ele of obj) {
                  if (ele === (searchInput)) {
                    return part
                  }
                }
                console.log("OBJ", obj)
                return obj.includes(searchInput)
              }
              if (partValue === (searchInput)) {
                return part
              }
            }
          }
        })
      )
    }
  }, [searchInput])

  //SET CURRENT PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sendToTicket = (part) => {
    history.push(`/tickets/${part.Ticket.id}`);
  };

  console.log("SEARCH INPUT", searchInput)
  console.log("FILTERED", filtered)
  return (
    <>
      <section className="list-template-header-container">
        <div className="list-template-header_inner">
          <section className='ticket-tab-container'>
          <div className='ticket-tab_inner'>
              <span  className='active ticket-tab-general-information-container'>
                  <div className='ticket-tab-general-information_inner'>
                      Parts List
                  </div>
              </span>
          </div>
          </section>
        </div>
      </section>
      <section className="list-template-search-container">
        <section className="ticket-list-search-container">
          <div className="ticket-list-search_inner">
            <Search
              setSearchInput={setSearchInput}
              setSearchDateRange={setSearchDateRange}
              setFiltered={setFiltered}
            />
          </div>
        </section>
      </section>
      <section className="list-template-info-container">
        <section className="part-list-container">
          <div className="part-list_inner">
            <h3 style={{ borderTopLeftRadius: ".5rem" }}>Number</h3>
            <h3>Description</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Ticket Reference</h3>
            <h3 style={{ borderTopRightRadius: ".5rem" }}>Status</h3>
            {filtered ? filtered?.map((part, i) => {
              if (i % 2 === 0) {
                return (
                  <>
                    <p>
                      <div
                        onClick={() => sendToTicket(part)}
                        className="part-list-part-num"
                      >
                        {part.number}
                      </div>
                    </p>
                    <p>{part.description}</p>
                    <p>{part.price}</p>
                    <p>{part.quantity}</p>
                    <p>{part.Ticket.number}</p>
                    <p>{part.status}</p>
                  </>
                );
              } else {
                return (
                  <>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      <div
                        onClick={() => sendToTicket(part)}
                        className="part-list-part-num"
                      >
                        {part.number}
                      </div>
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.description}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.price}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.quantity}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.Ticket.number}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.status}
                    </p>
                  </>
                );
              }
            }) : currentParts?.map((part, i) => {
              if (i % 2 === 0) {
                return (
                  <>
                    <p>
                      <div
                        onClick={() => sendToTicket(part)}
                        className="part-list-part-num"
                      >
                        {part.number}
                      </div>
                    </p>
                    <p>{part.description}</p>
                    <p>{part.price}</p>
                    <p>{part.quantity}</p>
                    <p>{part.Ticket.number}</p>
                    <p>{part.status}</p>
                  </>
                );
              } else {
                return (
                  <>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      <div
                        onClick={() => sendToTicket(part)}
                        className="part-list-part-num"
                      >
                        {part.number}
                      </div>
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.description}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.price}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.quantity}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.Ticket.number}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {part.status}
                    </p>
                  </>
                );
              }
            })}
          </div>
          <section className="ticket-list-page-num-container">
            <div className="ticket-list-ticket-count">
              <p>Parts Found: {partList.length}</p>
            </div>
            <div className="ticket-list-page-num">
              <Pagination
                totalPerPage={partsPerPage}
                totalItems={partList.length}
                paginate={paginate}
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
