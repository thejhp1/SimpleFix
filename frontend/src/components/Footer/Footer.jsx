import React from 'react'
import "../../styles/components/Footer.css";

export default function Footer() {
  return (
    <>
    <section className='footer-container'>
        <div className='footer_inner'>
            <img src='/images/LandingPage_WhiteHorizontalLogo.png' />
            <p className='footer-developer'>
                Meet the Developer: <i class="fa-brands fa-square-github fa-2xl"></i> <i class="fa-brands fa-linkedin fa-2xl"></i>
            </p>
            <span>
                <i class="fa-regular fa-copyright"></i> SimpleFix. No Rights Reserved.
            </span>
        </div>

    </section>
    </>
  )
}
