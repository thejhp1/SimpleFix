import React, { useRef } from 'react'
import "../../styles/components/LandingPage.css";
import NavigationBar from '../NavigationBar/NavigationBar';

export default function LandingPage() {
  const secondSlideRef = useRef(null);
  const thirdSlideRef = useRef(null);

  const secondSlide = () => {
    secondSlideRef.current?.scrollIntoView({behavior: "smooth"})
  }

  const thirdSlide = () => {
    thirdSlideRef.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <div className='landing-page-scroll'>
        <section className='landing-page-inital-block'>
          <section className='landing-page-video-container'>
            <div className='landing-page-video_inner'>
              <video src="../../public/landingpage_logo.mp4" autoPlay loop muted></video>
            </div>
          </section>
          <section className='landing-page-slide-container'>
            <div onClick={secondSlide} className='landing-page-slide_inner'>
              <p class="landing-page-slider fa-bounce">EXPLORE</p>
              <i class="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>
        <section className='landing-page-block'>
          <section className='landing-page-info'>
            <div className='landing-page-info_inner'>
              <h1>Hello World</h1>
            </div>
          </section>
          <section className='landing-page-slide-container'>
            <div onClick={thirdSlide} className='landing-page-slide_inner'>
              <p ref={secondSlideRef} class="landing-page-slider fa-bounce">EXPLORE</p>
              <i class="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>
        <section className='landing-page-block'>
          <section className='landing-page-info'>
            <div className='landing-page-info_inner'>
              <h1>Hello World</h1>
            </div>
          </section>
          <section className='landing-page-slide-container'>
            <div className='landing-page-slide_inner'>
              <p ref={thirdSlideRef} class="landing-page-slider fa-bounce">EXPLORE</p>
              <i class="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}
