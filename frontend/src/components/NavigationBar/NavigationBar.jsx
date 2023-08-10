import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";
import OpenModalMenuItem from "../OpenModal/OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "../../styles/components/NavigationBar.css";

function NavigationBar({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const sendToLanding = () => {
    history.push("/")
  }
  return (
    <div className="navi-bar">
      <div className="navi-home">
          <img onClick={sendToLanding}src="/images/LandingPage_WhiteHorizontalLogo.png"></img>
      </div>


      {isLoaded && (
        <>
          {sessionUser ? (
            <ProfileButton user={sessionUser} />
          ) : (
            <div className="navi-login-container">
              <div className="navi-login-login-button">
                <OpenModalMenuItem
                  itemText="LOGIN"
                  modalComponent={<LoginFormModal />}
                />
              </div>
              <div className="navi-login-signup-button">
                <OpenModalMenuItem
                  itemText="SIGNUP"
                  modalComponent={<SignupFormModal />}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NavigationBar;
