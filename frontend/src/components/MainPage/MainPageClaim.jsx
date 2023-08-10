import React from "react";

export default function MainPageClaim() {
  return (
    <div className="main-page-body_inner">
      <img style={{ marginTop: "-4rem" }} src="/images/MainPage_Claim.png" />
      <h1>CLAIM</h1>
      <div className="main-page-body-options-container">
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p>CLAIM LIST</p>
        </div>
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p>NEW CLAIM</p>
        </div>
      </div>
    </div>
  );
}
