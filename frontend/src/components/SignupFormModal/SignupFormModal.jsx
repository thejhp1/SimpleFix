import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import OpenModalLi from "../OpenModalLi/OpenModalLi";
import "../../styles/components/SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [validateError, setValidateError] = useState({});
  const { closeModal } = useModal();

  useEffect(() => {
    const validateError = {};

    if (username.length < 4) {
      validateError.username = "Username cannot be less than 4 characters";
    }

    if (!password) {
      validateError.password = "Password cannot be empty";
    } else if (password.length < 6) {
      validateError.password = "Password cannot be less than 6 characters";
    } else if (password.length !== confirmPassword.length) {
      validateError.password = "Passwords do not match";
    }

    if (!email.length) {
      validateError.email = "Email cannot be empty";
    }

    setValidateError(validateError);
  }, [email, username, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length > 256) {
      errors.email = "Email cannot exceed 256 characters";
    }

    if (username.length > 50) {
      errors.username = "Username cannot exceed 50 characters";
    }

    if (password.length > 50) {
      errors.password = "Password cannot exceed 50 characters";
    }

    if (!email.includes("@")) {
      errors.email = "Invalid email";
    } else if (
      !email.endsWith(".org") &&
      !email.endsWith(".com") &&
      !email.endsWith(".gov") &&
      !email.endsWith(".edu") &&
      !email.endsWith(".net") &&
      !email.endsWith(".io")
    ) {
      errors.email = "Invalid email, must end with .org/.com/.gov/.net/.edu/.io";
    } else if (email.includes("@")) {
      let count = 0;
      for (let ele of email.split("")) {
        if (ele === "@") {
          count++;
        }
      }
      if (count > 1) {
        errors.email = "Invalid email";
      }
    }
    if (password !== confirmPassword) {
      errors.password = "Passwords do not match";
    }

    if (Object.values(errors).length === 0) {
      dispatch(
        sessionActions.signup({
          email,
          username,
          password,
        })
      )
        .then(closeModal)
        .catch( async (res) => {
          if (res && res.errors) {
            if (res.errors.email && res.errors.email.length > 0) {
              res.errors.email = res.errors.email.replace(res.errors.email.split("")[0], res.errors.email.split("")[0].toUpperCase())
              setErrors(res.errors)
            }
            if (res.errors.username && res.errors.username.length > 0) {
              res.errors.username = res.errors.username.replace(res.errors.username.split("")[0], res.errors.username.split("")[0].toUpperCase())
              setErrors(res.errors)
            }
          }
        });
    }

    setErrors(errors);
  };

  return (
    <div className="signup-modal-outer-container">
      <i className="fa-sharp fa-solid fa-xmark fa-xl signupp-xmark" onClick={closeModal}></i>
      <section className="signup-modal-container">
        <div className="login-modal-icon">
          <img width="175px" height="175px" src="/images/LandingPage_BlackVerticalLogo.png"></img>
        </div>
        <h1>Sign Up</h1>
        <div className="signup-modal-login">
          <span>Already a Member?</span>
          <span className="signup-modal">
            <OpenModalLi
              itemText="Log in"
              modalComponent={<LoginFormModal />}
            />
          </span>
        </div>
        <form className="signup-modal-input-form" onSubmit={handleSubmit}>
          <label>
            <p className="signup-modal-input-label">Email</p>
            <input
              type="text"
              className={`signup-modal-inputs ${errors.email ? "errors" : ""}`}
              placeholder="Enter a valid email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error-signup"><i className="fa-solid fa-circle-exclamation"></i> {errors.email}</p>}

          </label>

          <label>
            <p className="signup-modal-input-label">Username</p>
            <input
              type="text"
              className={`signup-modal-inputs ${errors.username ? "errors" : ""}`}
              placeholder="Username must be at least 4 characters..."
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <p className="error-signup"><i className="fa-solid fa-circle-exclamation"></i> {errors.username}</p>}
          </label>

          <label>
          <p className="signup-modal-input-label">Password</p>
            <input
              type="password"
              placeholder="Password must be at least 4 characters..."
              autoComplete="new-password"
              className={`signup-modal-inputs ${errors.password ? "errors" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error-signup"><i className="fa-solid fa-circle-exclamation"></i> {errors.password}</p>}

          </label>
          <label>
          <p className="signup-modal-input-label">Confirm Password</p>

            <input
              type="password"
              placeholder="Please make sure that both passwords are matching..."
              className={`signup-modal-inputs ${errors.password ? "errors" : ""}`}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error-signup"><i className="fa-solid fa-circle-exclamation"></i> {errors.password}</p>}

          </label>
          <button
            className="signup-modal-button"
            type="submit"
            disabled={Object.values(validateError).length}
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default SignupFormModal;
