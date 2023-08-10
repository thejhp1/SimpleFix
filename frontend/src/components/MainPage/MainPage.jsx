import React from 'react'
import { useSelector } from 'react-redux'
import "../../styles/components/MainPage.css";


export default function MainPage() {
  const user = useSelector(state => state.session.user)
  const company = user?.company
  console.log(company)
  return (
    <>
    <div className='asdasd'>

      <section className='main-page-header-container'>
        <div className='main-page-header_inner'>
          <p className='main-page-header-text'>{company?.toUpperCase()} REPAIR TICKET MANGEMENT</p>

        </div>
      </section>
      <section className='main-page-body-container'>
        <div className='main-page-body_inner'>
          <img style={{marginTop:"-4rem"}} src="/images/MainPage_Ticket.png" />
          <h1>TICKET</h1>
          <div className='main-page-body_options'>
            asd
          </div>
        </div>
        <div className='main-page-body_inner'>
          <img style={{marginTop:"-4rem"}} src="/images/MainPage_Part.png" />
          <h1>PART</h1>
          <div className='main-page-body_options'>
            asd
          </div>
        </div>
        <div className='main-page-body_inner'>
          <img style={{marginTop:"-4rem"}} src="/images/MainPage_Claim.png" />
          <h1>CLAIM</h1>
          <div className='main-page-body_options'>
            asd
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
