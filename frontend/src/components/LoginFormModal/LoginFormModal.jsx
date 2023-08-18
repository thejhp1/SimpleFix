import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import OpenModalLi from "../OpenModalLi/OpenModalLi";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "../../styles/components/LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [validateError, setValidateError] = useState({});
  const [passState1, setPassState1] = useState("");
  const [passState2, setPassState2] = useState("hidden");
  const [showPass, setShowPass] = useState("password");
  const { closeModal } = useModal();

  useEffect(() => {
    const validateError = {};
    if (credential.length < 4) {
      validateError.credential = "Email must be atleast 4 characters";
    } else if (password.length < 6) {
      validateError.password = "Password must be atleast 6 characters";
    }
    setValidateError(validateError);
  }, [credential, password]);

  // NEED TO IMPLEMENT A "ISSUE WITH LOGIN PAGE" PAGE
  const loginIssue = () => {
    alert("Feature coming soon!");
    // closeModal();
  };

  //NEED TO IMPLEMENT A "FORGOT PASSWORD" PAGE
  const forgotPassword = () => {
    alert("Feature coming soon!");
    // closeModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (credential.length < 4) {
      errors.credential = "Email must be atleast 4 characters";
    } else if (password.length < 6) {
      errors.password = "Password must be atleast 6 characters";
    }

    if (Object.values(errors).length === 0) {
      dispatch(sessionActions.login({ credential, password }))
        .then(closeModal)
        .catch(async (res) => {
          if (res && res.errors) {
            setErrors(res.errors);
          }
        });
    }
    setErrors(errors);
  };

  const demoUser = () => {
    dispatch(sessionActions.login({ credential: "Demo-A", password: "password"}))
        .then(closeModal)
        .catch(async (res) => {
          if (res && res.errors) {
            setErrors(res.errors);
          }
        });
  }

  const revealPass = () => {
    if (passState1 === "hidden") {
      setShowPass("password");
      setPassState1("");
      setPassState2("hidden");
    } else if (passState2 === "hidden") {
      setShowPass("text");
      setPassState2("");
      setPassState1("hidden");
    }
  };

  return (
    <div className="login-modal-container">
      <i className="fa-solid fa-xmark fa-xl login-xmark" onClick={closeModal}></i>
      <section className="login-modal-header-container">
        <div className="login-modal-icon">
          <img width="175px" height="175px" src="/images/LandingPage_BlackVerticalLogo.png"></img>
        </div>
        <h1
          className="login-modal-title"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Log in
        </h1>
        <div className="login-modal-signup">
          <span>Not a member yet?</span>
          <span className="signup-modal">
            <OpenModalLi
              itemText="Sign up"
              modalComponent={<SignupFormModal />}
            />
          </span>
        </div>
      </section>
      <form className="login-modal" onSubmit={handleSubmit}>
        <label className="login-modal-label-login">Email</label>
        <input
          className={`login-modal-input ${errors.credential ? "error" : ""}`}
          type="text"
          value={credential}
          autoComplete="username"
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        {errors.credential && <p className="error-input-email"><i className="fa-solid fa-circle-exclamation"></i> Incorrect information was provided</p>}

        <div className="login-modal-label-container">
          <label className="login-modal-label-password">Password</label>
          <span
            onClick={forgotPassword}
            className="login-modal-label-forgot-password"
          >
            Forgot password
          </span>
        </div>
        <div className="login-modal-reveal-pass-container">
          <input
            type="checkbox"
            className="login-modal-reveal-pass"
            onClick={revealPass}
          ></input>
        </div>
        <i
          className={`fa-sharp fa-solid fa-eye-slash reveal-pass fa-sm ${passState1}`}
        ></i>
        <i
          className={`fa-sharp fa-solid fa-eye reveal-pass fa-sm ${passState2}`}
        ></i>
        <input
          className={`login-modal-input ${errors.credential ? "error" : ""}`}
          type={showPass}
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.credential && <p className="error-input-password"><i className="fa-solid fa-circle-exclamation"></i> Incorrect information was provided</p>}
        <button
          disabled={Object.values(validateError).length}
          className="login-modal-button"
          type="submit"
        >
          Log in
        </button>
      </form>
      <div className="login-modal-separator">
        <p className="login-modal-separator-border"> </p>
        <p className="login-modal-separator-center">or</p>
        <p className="login-modal-separator-border"> </p>
      </div>
      <div className="login-modal-footer">
        <span
          onClick={loginIssue}
        >
          Issues with log in?
        </span>
        <span
          onClick={demoUser}
        >
          Log in as Demo User
        </span>
      </div>
    </div>
  );
}

export default LoginFormModal;
