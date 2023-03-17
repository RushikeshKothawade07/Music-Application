import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import music1 from "../images/music1.png";

const Login = () => {
  return (
    <>
      <div className="top">
        <div className="imgContainer">
          <img src={music1} alt="musicimg" style={{ height: "150px" }} />
        </div>
        <div id="bg">
          <div className="container mainContainer mt-5">
            <form>
              <div className="form-field">
                <input type="email" placeholder="Email / Username" required />
              </div>
              <div className="form-field">
                <input type="password" placeholder="Password" required />
              </div>

              <div className="form-field1 mb-5">
                <button className="btn" type="submit">
                  Log in
                </button>
              </div>
              <NavLink className="nav-link nav-reg text-center" to="/signup">
                <u>Create a new account</u>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
