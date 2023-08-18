import React from 'react'
import "../../styles/components/PageNotFound.css"

export default function PageNotFound() {
  return (
    <section className='page-not-found-container'>
      <div className='page-not-found_inner'>
        <p>Did you mean to do that? Nothing found.</p>
        <img width="800px" height="800px" src="/images/NotFoundPage.png"/>
      </div>
    </section>
  )
}
