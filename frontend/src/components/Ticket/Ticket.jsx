import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import "../../styles/components/Ticket.css"
import { thunkGetSingleTicket } from '../../store/singleTicket';

export default function Ticket() {
  const singleTicketStore = useSelector(state => state);
  const { ticketId } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunkGetSingleTicket(ticketId))
  }, [dispatch])
  
  return (
    <div>Ticket</div>
  )
}
