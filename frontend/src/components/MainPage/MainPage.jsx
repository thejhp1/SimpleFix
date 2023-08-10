import React from 'react'
import { useSelector } from 'react-redux'
import "../../styles/components/MainPage.css";
import MainPageTicket from './MainPageTicket';
import MainPagePart from './MainPagePart';
import MainPageClaim from './MainPageClaim';


export default function MainPage() {
  const user = useSelector(state => state.session.user)
  const company = user?.company

  return (
    <>
      <section className='main-page-header-container'>
        <div className='main-page-header_inner'>
          <p className='main-page-header-text'>{company?.toUpperCase()} REPAIR TICKET MANGEMENT</p>

        </div>
      </section>
      <section className='main-page-body-container'>
        <MainPageTicket />
        <MainPagePart />
        <MainPageClaim />
      </section>
    </>
  )
}
