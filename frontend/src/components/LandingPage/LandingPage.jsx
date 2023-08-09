import React from 'react'
import "../../styles/components/LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <div className='landing-page-video'>
        <video src="/public/landingpage_logo.mp4" autoPlay loop muted></video>
      </div>
    </>
  )
}
