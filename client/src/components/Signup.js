import { React, useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    favSinger: "",
    password: "",
    cpassword: "",
  });
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    //Object Destructuring
    const { name, email, favSinger, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        favSinger,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      alert("invalid cred");
    } else {
      alert("Success");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="top">
        <div id="bg">
          <div className="container mainContainer mt-5">
            <form method="POST">
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="interests"
                  id="interests"
                  value={user.interests}
                  onChange={handleInputs}
                  placeholder="Favourite Singer"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="form-field1 mb-5">
                <button
                  className="btn"
                  type="submit"
                  name="signup"
                  id="signup"
                  value="Register"
                  onClick={PostData}
                >
                  Register
                </button>
              </div>
              <NavLink className="nav-link nav-reg text-center" to="/login">
                <u>Already registered ? Login</u>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
