import React from 'react'
import { useSelector } from 'react-redux'

export default function Ticket() {
  const singleTicketStore = useSelector(state => state);
  
  return (
    <div>Ticket</div>
  )
}
