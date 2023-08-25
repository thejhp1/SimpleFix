import React, { useEffect, useState } from 'react'
import dayjs from "dayjs";
import "../../styles/components/Search.css"

export default function Search({ setSearchInput, setFiltered }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setFiltered("")
    if (input) {
      setSearchInput(input)
    } else if (input.length === 0) {
      setSearchInput("")
    }
    setInput("")
    setLoading(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit()
    }
  };

  return (
    <section className='search-container'>
      <div className='search-input-container'>
        <p>Search: </p>
        <input value={input} onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)}></input>
      </div>
      <div className='ticket-tab-button'>
              {loading ? <button>LOADING <i className="fa-solid fa-spinner fa-spin-pulse"></i> </button > : <button onClick={handleSubmit}>SEARCH</button> }
      </div>

    </section>
  )
}
