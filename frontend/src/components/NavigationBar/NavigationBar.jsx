import React from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "../../styles/components/NavigationBar.css";

function NavigationBar({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="navi-bar">
      <div className="navi-home">
          <span>SimpleFix</span>
      </div>
      {isLoaded && (
        <>
          {sessionUser ? (
            <ProfileButton user={sessionUser} />
          ) : (
            <div className="navi-login-container">
              <div className="navi-login-login-button">
                <OpenModalMenuItem
                  itemText="Log in"
                  modalComponent={<LoginFormModal />}
                />
              </div>
              <div className="navi-login-signup-button">
                <OpenModalMenuItem
                  itemText="Sign up"
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
