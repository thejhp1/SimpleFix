import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetAllPart } from "../../store/part";
import Pagination from "../Pagination/Pagination";
import "../../styles/components/PartList.css";

export default function PartList() {
  const partStore = useSelector((state) => state.parts);
  const user = useSelector((state) => state.session.user)
  const dispatch = useDispatch();
  const history = useHistory();
  const parts = Object.values(partStore);
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage, setPartsPerPage] = useState(20);

  useEffect(() => {
    dispatch(thunkGetAllPart());
  }, [dispatch]);

  let partList = []
  for (let part of parts){
    if (part.Ticket.employeeId === user.id) {
      partList.push(part)
    }
  }

  console.log(partList)

  //GET CURRENT PARTS
  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = partList.slice(
    indexOfFirstPart,
    indexOfLastPart
  );

  //SET CURRENT PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sendToTicket = () => {

  }

  return (
    <>
      <section className="list-template-header-container">
        {/* <div className="list-template-header_inner">
          <SearchTicketTab
            selectedTab={selectedState}
            setSelectedTab={setSelectedState}
          />
        </div> */}
      </section>
      <section className="list-template-search-container">
        asd
      </section>
      <section className="list-template-info-container">
        <section className="part-list-container">
          <div className="part-list_inner">
            <h3 style={{ borderTopLeftRadius: ".5rem" }}>Number</h3>
            <h3>Description</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 style={{ borderTopRightRadius: ".5rem" }}>Status</h3>
            {currentParts?.map((part, i) => {
              if (i % 2 === 0) {
                return (
                  <>
                    <p><div onClick={sendToTicket} className="part-list-part-num">{part.number}</div></p>
                    <p>{part.description}</p>
                    <p>{part.price}</p>
                    <p>{part.quantity}</p>
                    <p>{part.status}</p>
                  </>
                );
              } else {
                return (
                  <>
                  <p style={{backgroundColor:"var(--gray)"}}><div onClick={sendToTicket} className="part-list-part-num">{part.number}</div></p>
                  <p style={{backgroundColor:"var(--gray)"}}>{part.description}</p>
                  <p style={{backgroundColor:"var(--gray)"}}>{part.price}</p>
                  <p style={{backgroundColor:"var(--gray)"}}>{part.quantity}</p>
                  <p style={{backgroundColor:"var(--gray)"}}>{part.status}</p>
                 </>

                )
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
