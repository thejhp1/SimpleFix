import React, { useRef } from 'react'
import Footer from '../Footer/Footer';
import "../../styles/components/LandingPage.css";

export default function LandingPage() {
  const secondSlideRef = useRef(null);
  const thirdSlideRef = useRef(null);
  const fourthSlideRef = useRef(null);

  const secondSlide = () => {
    secondSlideRef.current?.scrollIntoView({behavior: "smooth"})
  }

  const thirdSlide = () => {
    thirdSlideRef.current?.scrollIntoView({behavior: "smooth"})
  }

  const fourthSlide = () => {
    fourthSlideRef.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <div className='landing-page-scroll'>
        <section className='landing-page-inital-block'>
          <section className='landing-page-video-container'>
            <div className='landing-page-video_inner'>
              <video src="/images/landingpage_logo.mp4" autoPlay loop muted></video>
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
          <section ref={secondSlideRef} className='landing-page-ref'>
          </section>
          <section className='landing-page-info'>
            <div className='landing-page-info_inner'>
              <h1>SimpleFix is an ideal, easy to use ticket management system.  </h1>
            </div>
          </section>
          <section className='landing-page-slide-container'>
            <div onClick={thirdSlide} className='landing-page-slide_inner'>
              <p class="landing-page-slider fa-bounce">EXPLORE</p>
              <i class="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>

        <section className='landing-page-block'>
          <section ref={thirdSlideRef} className='landing-page-ref'>

          </section>
          <section className='landing-page-info'>
            <div className='landing-page-info_inner'>
              <h1>Hello World</h1>
            </div>
          </section>
          <section className='landing-page-slide-container'>
            <div onClick={fourthSlide} className='landing-page-slide_inner'>
              <p  class="landing-page-slider fa-bounce">EXPLORE</p>
              <i class="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>

        <section className='landing-page-block'>
          <section ref={fourthSlideRef} className='landing-page-ref'>
          </section>
          <section className='landing-page-final-info'>
            <div className='landing-page-info_inner'>
              <h1>Are you ready? Let's get started!</h1>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}
