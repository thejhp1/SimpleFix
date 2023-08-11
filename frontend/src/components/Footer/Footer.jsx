import React from 'react'
import { useHistory } from 'react-router-dom';
import "../../styles/components/Footer.css";

export default function Footer() {
  const history = useHistory()

  const sendToTop = () => {
    window.scrollTo({ top: 1, behavior: "smooth" });
  }

  return (
    <>
    <section className='footer-container'>
        <div className='footer_inner'>
            <img onClick={sendToTop} src='/images/LandingPage_WhiteHorizontalLogo.png' />
            <p className='footer-developer'>
                Meet the Developer: <i onClick={()=> window.location.href = "https://github.com/thejhp1"} class="fa-brands fa-square-github fa-2xl"></i> <i onClick={()=> window.location.href = "https://www.linkedin.com/in/jun-park-3b23b7285/"}  class="fa-brands fa-linkedin fa-2xl"></i>
            </p>
            <span>
                <i class="fa-regular fa-copyright"></i> SimpleFix. No Rights Reserved.
            </span>
        </div>

    </section>
    </>
  )
}
