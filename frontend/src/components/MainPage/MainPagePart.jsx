import React from "react";

export default function MainPagePart() {
  return (
    <div className="main-page-body_inner">
      <img style={{ marginTop: "-4rem" }} src="/images/MainPage_Part.png" />
      <h1>PART</h1>
      <div className="main-page-body-options-container">
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p>PART LIST</p>
        </div>
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p>NEW PART</p>
        </div>
      </div>
    </div>
  );
}
