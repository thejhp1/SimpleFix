import React from 'react'
import "../../styles/components/Pagination.css"


export default function Pagination({ totalPerPage, totalItems, paginate}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / totalPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <section className='pagination-container'>
        <div className='pagination_inner'>
            {pageNumbers.map(number => (
                <li key={number} className='pagination-item'>
                    <a onClick={() => paginate(number)} className='pagination-link'>
                        {number}
                    </a>

                </li>
            ))}
        </div>

    </section>
  )
}
