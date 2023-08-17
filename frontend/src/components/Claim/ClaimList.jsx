import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllClaim } from "../../store/claim";
import { useHistory } from "react-router-dom";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import OpenModalSpan from "../OpenModalSpan/OpenModalSpan";
import UpdateClaimModal from "../UpdateClaimModal/UpdateClaimModal";
import "../../styles/components/PartList.css";
import "../../styles/components/ClaimList.css";

export default function ClaimList() {
  const claimStore = useSelector((state) => state.claims);
  const user = useSelector((state) => state.session.user)
  const claims = Object.values(claimStore);
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [claimsPerPage, setClaimsPerPage] = useState(20);
  const [searchInput, setSearchInput] = useState("");
  const [searchDateRange, setSearchDateRange] = useState("");
  const [filtered, setFiltered] = useState("");
  let claimList = [];

  for (let claim of claims) {
    if (claim.Ticket.employeeId === user?.id) {
      claimList.push(claim)
    }
  }

  //GET CURRENT PARTS
  const indexOfLastClaim = currentPage * claimsPerPage;
  const indexOfFirstClaim = indexOfLastClaim - claimsPerPage;
  const currentClaims = claimList?.slice(indexOfFirstClaim, indexOfLastClaim);

  //SET CURRENT PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(thunkGetAllClaim());
  }, [dispatch]);

  useEffect(() => {
    if (searchInput.length > 1) {
      setFiltered(
        currentClaims.filter((claim) => {
          for (let claimValue of Object.values(claim)) {
            if (typeof claimValue !== "object") {
              console.log("INSIDE", searchInput)
              if (claimValue.toString().toLowerCase().includes(searchInput.toLowerCase())) {
                return claim
              }
            }
            console.log("CLAIM VALUE", claimValue)
          }
        })
      )
    }
  }, [searchInput])


  // console.log("CLAIMS", claims)
  const sendToClaim = (claim) => {
    history.push(`/tickets/${claim?.Ticket.id}`)
  };

  return (
    <>
      <section className="list-template-header-container">
        <div className="list-template-header_inner">
          <section className="ticket-tab-container">
            <div className="ticket-tab_inner">
              <span className="active ticket-tab-general-information-container">
                <div className="ticket-tab-general-information_inner">
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
        <section className="claim-list-container">
          <div className="claim-list_inner">
            <h3 style={{ borderTopLeftRadius: ".5rem" }}>Claim Number</h3>
            <h3>Labor Amount</h3>
            <h3>Part Amount</h3>
            <h3>Mileage</h3>
            <h3>Status</h3>
            <h3
              style={{
                borderTopRightRadius: ".5rem"
              }}
            >
              Update/Delete
            </h3>
            {filtered
              ? filtered?.map((claim, i) => {
                  if (i % 2 === 0) {
                    return (
                      <>
                        <p>
                          <div
                            onClick={() => sendToClaim(claim)}
                            className="part-list-part-num"
                          >
                            {claim.number}
                          </div>
                        </p>
                        <p>{claim.labor}</p>
                        <p>{claim.part}</p>
                        <p>{claim.mileage}</p>
                        <p class="ticket-list-ticket-red">{claim.status}</p>
                        <div className="claim-list-options">
                          <h4>
                            <OpenModalSpan
                              spanText="UPDATE"
                              modalComponent={
                                <UpdateClaimModal claim={claim} type="Update" />
                              }
                            />
                          </h4>
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          <div
                            onClick={() => sendToClaim(claim)}
                            className="part-list-part-num"
                          >
                            {claim.number}
                          </div>
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {claim.labor}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {claim.part}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {claim.mileage}
                        </p>
                        <p
                          class="ticket-list-ticket-red"
                          style={{ backgroundColor: "var(--gray)" }}
                        >
                          {claim.status}
                        </p>
                        <div className="claim-list-options">
                          <h4 style={{ backgroundColor: "var(--gray)" }}>
                            <OpenModalSpan
                              spanText="UPDATE"
                              modalComponent={
                                <UpdateClaimModal claim={claim} type="Update" />
                              }
                            />
                          </h4>
                        </div>
                      </>
                    );
                  }
                })
              : currentClaims?.map((claim, i) => {
                  if (i % 2 === 0) {
                    return (
                      <>
                        <p>
                          <div
                            onClick={() => sendToClaim(claim)}
                            className="part-list-part-num"
                          >
                            {claim.number}
                          </div>
                        </p>
                        <p>{claim.labor}</p>
                        <p>{claim.part}</p>
                        <p>{claim.mileage}</p>
                        <p class="ticket-list-ticket-red">{claim.status}</p>
                        <div className="claim-list-options">
                          <h4>
                            <OpenModalSpan
                              spanText="UPDATE"
                              modalComponent={
                                <UpdateClaimModal claim={claim} type="Update" />
                              }
                            />
                          </h4>
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          <div
                            onClick={() => sendToClaim(claim)}
                            className="part-list-part-num"
                          >
                            {claim.number}
                          </div>
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {claim.labor}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {claim.part}
                        </p>
                        <p style={{ backgroundColor: "var(--gray)" }}>
                          {claim.mileage}
                        </p>
                        <p
                          class="ticket-list-ticket-red"
                          style={{ backgroundColor: "var(--gray)" }}
                        >
                          {claim.status}
                        </p>
                        <div className="claim-list-options">
                          <h4 style={{ backgroundColor: "var(--gray)" }}>
                            <OpenModalSpan
                              spanText="UPDATE"
                              modalComponent={
                                <UpdateClaimModal claim={claim} type="Update" />
                              }
                            />
                          </h4>
                        </div>
                      </>
                    );
                  }
                })}
          </div>
          <section className="ticket-list-page-num-container">
            <div className="ticket-list-ticket-count">
              <p>Claims Found: {claimList?.length}</p>
            </div>
            <div className="ticket-list-page-num">
              <Pagination
                totalPerPage={claimsPerPage}
                totalItems={claimList.length}
                paginate={paginate}
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
