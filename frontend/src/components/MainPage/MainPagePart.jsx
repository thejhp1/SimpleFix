import React from "react";
import { useHistory } from "react-router-dom";

export default function MainPagePart() {
  const history = useHistory();

  const sendToPartList = () => {
    history.push("/parts")
  }

  const sendToCreatePart = () => {
    history.push("/parts/new")
  }

  return (
    <div className="main-page-body_inner">
      <img style={{ marginTop: "-4rem" }} src="/images/MainPage_Part.png" />
      <h1>PART</h1>
      <div className="main-page-body-options-container">
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p onClick={sendToPartList}>PART LIST</p>
        </div>
        <div className="main-page-body-options_inner">
          <i class="fa-solid fa-chevron-right fa-2xs"></i>
          <p onClick={sendToCreatePart}>NEW PART</p>
        </div>
      </div>
    </div>
  );
}
