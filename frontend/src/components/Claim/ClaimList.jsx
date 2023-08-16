import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllTicket } from "../../store/ticket";
import { useHistory } from "react-router-dom";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import "../../styles/components/PartList.css";

export default function ClaimList() {
  // const claimStore = useSelector((state) => state.tickets);
  // const claims = Object.values(claimStore);
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [claimsPerPage, setClaimsPerPage] = useState(20);
  const [searchInput, setSearchInput] = useState("");
  const [searchDateRange, setSearchDateRange] = useState("")
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
  //   dispatch(thunkGetAllTicket())
  }, [dispatch])

  //GET CURRENT PARTS
  const indexOfLastClaim = currentPage * claimsPerPage;
  const indexOfFirstClaim = indexOfLastClaim - claimsPerPage;
  // const currentClaims = claimList.slice(indexOfFirstClaim, indexOfLastClaim);

  //SET CURRENT PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <section className="list-template-header-container">
        <div className="list-template-header_inner">
          <section className='ticket-tab-container'>
          <div className='ticket-tab_inner'>
              <span  className='active ticket-tab-general-information-container'>
                  <div className='ticket-tab-general-information_inner'>
                      Claim List
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
            {/* {filtered ? filtered?.map((claim, i) => {
              if (i % 2 === 0) {
                return (
                  <>
                    <p>
                      <div
                        onClick={() => sendToTicket(claim)}
                        className="part-list-part-num"
                      >
                        {claim.number}
                      </div>
                    </p>
                    <p>{claim.description}</p>
                    <p>{claim.price}</p>
                    <p>{claim.quantity}</p>
                    <p>{claim.Ticket.number}</p>
                    <p>{claim.status}</p>
                  </>
                );
              } else {
                return (
                  <>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      <div
                        onClick={() => sendToTicket(claim)}
                        className="part-list-part-num"
                      >
                        {claim.number}
                      </div>
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.description}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.price}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.quantity}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.Ticket.number}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.status}
                    </p>
                  </>
                );
              }
            }) : currentClaims?.map((claim, i) => {
              if (i % 2 === 0) {
                return (
                  <>
                    <p>
                      <div
                        onClick={() => sendToTicket(claim)}
                        className="part-list-part-num"
                      >
                        {claim.number}
                      </div>
                    </p>
                    <p>{claim.description}</p>
                    <p>{claim.price}</p>
                    <p>{claim.quantity}</p>
                    <p>{claim.Ticket.number}</p>
                    <p>{claim.status}</p>
                  </>
                );
              } else {
                return (
                  <>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      <div
                        onClick={() => sendToTicket(claim)}
                        className="part-list-part-num"
                      >
                        {claim.number}
                      </div>
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.description}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.price}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.quantity}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.Ticket.number}
                    </p>
                    <p style={{ backgroundColor: "var(--gray)" }}>
                      {claim.status}
                    </p>
                  </>
                );
              }
            })} */}
          </div>
          <section className="ticket-list-page-num-container">
            <div className="ticket-list-ticket-count">
              {/* <p>Claims Found: {claimList.length}</p> */}
            </div>
            <div className="ticket-list-page-num">
              {/* <Pagination
                totalPerPage={claimsPerPage}
                totalItems={claimList.length}
                paginate={paginate}
              /> */}
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
