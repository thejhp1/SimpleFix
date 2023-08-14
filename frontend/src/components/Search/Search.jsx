import React, { useEffect, useState } from 'react'
import dayjs from "dayjs";
import "../../styles/components/Search.css"

export default function Search({ setSearchInput, setSearchDateRange, setFiltered }) {
  const [input, setInput] = useState("");
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [dateRangeEnd, setDateRangeEnd] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setFiltered("")
    if (input) {
      setSearchInput(input)
    } else if (input.length === 0) {
      setSearchInput("")
    }
    if (dateRangeStart && dateRangeEnd) {
      setSearchDateRange([dayjs(dateRangeStart).format("MM/DD/YY"), dayjs(dateRangeEnd).format("MM/DD/YY")])
    }
    setInput("")
    setLoading(false)
  }
  return (
    <section className='search-container'>
      <div className='search-input-container'>
        <p>Search: </p>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      </div>
      <div className='date-container'>
        <p>Date Range:</p>
        <input type="date" value={dateRangeStart} onChange={(e) => setDateRangeStart(e.target.value)}></input>
        -
        <input type="date" value={dateRangeEnd} onChange={(e) => setDateRangeEnd(e.target.value)}></input>
      </div>
      <div className='ticket-tab-button'>
              {loading ? <button>LOADING <i class="fa-solid fa-spinner fa-spin-pulse"></i> </button > : <button onClick={handleSubmit}>SEARCH</button> }
      </div>

    </section>
  )
}
