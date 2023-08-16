import React from "react";
import { useHistory } from 'react-router-dom'
export default function MainPageClaim() {
  const history = useHistory()

  const sendToClaimList = () => {
    history.push("/claims")
  }

  const sendToCreateClaim = () => {
    // history.push("/claims/new")
  }


  return (
    <div className="main-page-body_inner">
      <img style={{ marginTop: "-4rem" }} src="/images/MainPage_Claim.png" />
      <h1>CLAIM</h1>
      <div className="main-page-body-options-container">
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p onClick={sendToClaimList}>CLAIM LIST</p>
        </div>
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p onClick={sendToCreateClaim}>NEW CLAIM</p>
        </div>
      </div>
    </div>
  );
}
