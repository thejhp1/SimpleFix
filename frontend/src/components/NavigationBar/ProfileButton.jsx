import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = () => {
    dispatch(sessionActions.logout());
    closeMenu();
    history.push("/");
  };

  const sendToMain = () => {
    closeMenu();
    history.push("/home")
  }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const ulClassNames =
    "fas fa-regular navi-user-arrow fa-angle-" + (showMenu ? "down fa-xl" : "up fa-xl");

  return (
    <>
      <div className="navi-icons">

        <button onClick={openMenu} className="navi-button">
          <p>MENU</p>
        </button>
        <i className={ulClassNames} onClick={openMenu}></i>
        <ul className={ulClassName} ref={ulRef}>
          {user ? (
            <div className="profile-dropdown-container">
              <li>Welcome to SimpleFix</li>
              <li>{user.email}</li>
              <p className="profile-dropdown-border"></p>
              <span onClick={sendToMain} className="profile-dropdown-menu-option">
                <p>Let's get to work</p>
                <i className="fa-regular fa-handshake"></i>
              </span>
              <span onClick={logout} className="profile-dropdown-menu-option">
                <p>Log out</p>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </span>
            </div>
          ) : ""}
        </ul>
      </div>
    </>
  );
}

export default ProfileButton;
