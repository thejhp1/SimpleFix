import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CreateTicketTab from "./CreateTicketTab";
import TicketInfoProduct from "./TicketInfoProduct";
import TicketInfoCustomer from "./TicketInfoCustomer";
import { thunkCreateTicket } from "../../store/singleTicket";
import { thunkGetAddress } from "../../store/googleMap";
import "../../styles/components/CreateTicket.css";

export default function CreateTicket() {
  const dispatch = useDispatch()
  const [ticketNumber, setTicketNumber] = useState("");
  const [buttonCheck, setButtonCheck] = useState(false)
  const [newCustomer, setNewCustomer] = useState("")
  const [newProduct, setNewProduct] = useState("")
  const [loading, setLoading] = useState(false)

  let ticket, flag = false

  // CREATE TICKET COMPONENT IS RENDERING THE TICKETINFOCUSTOMER AND TICKETINFOPRODUCT COMPONENTS. TICKET COMPONENT IS SENDING IN A CALLBACK FUNCTION TO EACH TICKETINFO COMPONENT TO RECEIVE THE FORM DATA.

  // ONCE RECEIVE DATA, CHECK TO MAKE SURE BOTH HAVE VALUE THEN CREATE THE "TICKET"
  console.log("ASD", newCustomer, newProduct)
  if (Object.values(newCustomer).length > 1 && Object.values(newProduct).length > 1) {
    ticket = ({...newCustomer , ...newProduct})
    // console.log("TICKET", ticket)
    // const location = dispatch(thunkGetAddress(`${ticket.street} ${ticket.city} ${ticket.state} ${ticket.zip}`)).then((res) => res)
    // if (location) {
    //   console.log("LOCATION", location)
    //     ticket["location"] = JSON.stringify(location.payload.location)
    //     console.log("TICKETAFTER", ticket["location"])
    // }
    flag = true
  }

  // USEEFFECT IS THERE TO MAKE SURE DISPATCH IS ONLY CALLED ONCE DUE TO MOUNTING AND UNMOUNTING OF PARENT COMPONENT
  useEffect(() => {
    if (flag) {
      // setLoading(true)
      console.log("ASDASDASD")
      dispatch(thunkCreateTicket(ticket))
    }
    return () => flag = false

  }, [flag, dispatch])

  return (
    <section className="create-ticket-container">
      <section className="create-ticket_inner">
        <div className="ticket-search_inner">
          <div className="ticket-search-input">
            <p>Ticket #: </p>
            <input
              onChange={(e) => {
                setTicketNumber(e.target.value);
              }}
              value={ticketNumber}
            ></input>
          </div>
        </div>
      </section>
        <div className="ticket-tab">
            <CreateTicketTab />
            <div className='ticket-tab-button'>
            {loading ? <button>LOADING <i className="fa-solid fa-spinner fa-spin-pulse"></i> </button> : <button onClick={() => setButtonCheck(true)}>CREATE</button>}
            </div>
        </div>
        <div className="create-ticket-form-container ">
            <TicketInfoCustomer type={"Create"} customer={""} handleCallback={buttonCheck} setNewCustomer={setNewCustomer} setButtonCheck={setButtonCheck}/>
            <TicketInfoProduct type={"Create"} product={""} handleCallback={buttonCheck} setNewProduct={setNewProduct} setButtonCheck={setButtonCheck}/>
        </div>
    </section>
  );
}
