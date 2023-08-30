import React, { useRef } from "react";
import OpenModalLi from "../OpenModalLi/OpenModalLi";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "../../styles/components/LandingPage.css";

export default function LandingPage() {
  const secondSlideRef = useRef(null);
  const thirdSlideRef = useRef(null);
  const fourthSlideRef = useRef(null);
  const videoRef = useRef(null);

  const secondSlide = () => {
    secondSlideRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const thirdSlide = () => {
    thirdSlideRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fourthSlide = () => {
    fourthSlideRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideo = () => {
    videoRef.current.play();
  }

  const sendToTop = () => {
    handleVideo()
    window.scrollTo({ top: 1 });
  }

  return (
    <>
      <div className="landing-page-scroll">
        <section className="landing-page-inital-block">
          <section className="landing-page-video-container">
            <div className="landing-page-video_inner">
              <video
                ref={videoRef}
                src="/images/landingpage_logo.mp4"
                autoPlay
                muted
              ></video>
            </div>
          </section>
          <section className="landing-page-slide-container">
            <div onClick={secondSlide} className="landing-page-slide_inner">
              <p className="landing-page-slider fa-bounce">EXPLORE</p>
              <i className="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>

        <section className="landing-page-block">
          <section ref={secondSlideRef} className="landing-page-ref"></section>
          <section className="landing-page-info">
            <div className="landing-page-info_inner">
              <img
                width="500px"
                height="500px"
                src="/images/LandingPage_FirstBlock.png"
              />
              <h1>
                Effortlessly manage customer support using SimpleFix. Streamline
                processes, enhance collaboration, and deliver top-notch
                assistance.
              </h1>
            </div>
          </section>
          <section className="landing-page-slide-container">
            <div onClick={thirdSlide} className="landing-page-slide_inner">
              <p className="landing-page-slider fa-bounce">EXPLORE</p>
              <i className="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>

        <section className="landing-page-block">
          <section ref={thirdSlideRef} className="landing-page-ref"></section>
          <section className="landing-page-info">
            <div className="landing-page-info_inner">
              <h1>
                Instantly create and manage tickets. Efficiently keep track of
                parts and your claims.
              </h1>
              <img
                width="500px"
                height="500px"
                src="/images/LandingPage_SecondBlock.png"
              />
            </div>
          </section>
          <section className="landing-page-slide-container">
            <div onClick={fourthSlide} className="landing-page-slide_inner">
              <p className="landing-page-slider fa-bounce">EXPLORE</p>
              <i className="fa-solid fa-angle-down fa-bounce"></i>
            </div>
          </section>
        </section>

        <section className="landing-page-block">
          <section ref={fourthSlideRef} className="landing-page-ref"></section>
          <section className="landing-page-final-info">
            <div className="landing-page-final-info_inner">
              <img
                width="500px"
                height="500px"
                src="/images/LandingPage_ThirdBlock.png"
              />

              <h1>
                Say goodbye to ticket management complexities - say hello to
                SimpleFix.
              </h1>
              <h3>Are you ready? Let's get started!</h3>
              <button className="landing-page-final-button">
                {" "}
                <OpenModalLi
                  itemText="Sign Up"
                  modalComponent={<SignupFormModal />}
                />
              </button>
              <section className="landing-page-final-slide-container">
                <div onClick={sendToTop} className="landing-page-slide_inner">
                  <p className="landing-page-slider fa-bounce">BACK UP</p>
                  <i className="fa-solid fa-angle-up fa-bounce"></i>
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
