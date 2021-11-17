import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import "../assets/styles/login.css";
import { BASEURL } from "../config/api";

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  console.log(history, "history");

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log(email, "from email");
    console.log(password, "from pass");
    localStorage.setItem("Username", JSON.stringify(username));
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Password", JSON.stringify(password));
    console.log("Saved in Local Storage");

    const form = {
      username: username,
      email: email,
      password: password,
    };

    const payload = form;
    if (form?.email && form?.username && form?.password) {
      fetch(`${BASEURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.status === 201) {
            return response.json();
          } else {
            return new Error("Failed to Sign Up");
          }
        })
        .then((data) => {
          localStorage.setItem("dataRegister", JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);
          swal("Sorry, internal server error...");
        });
    }
    history.push("/login");
  }

  return (
    <>
      <div className="outer">
        <div className="inner">
          <div>
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn-register">
                Register
              </button>
              <p className="text-register">
                Already have an account?{" "}
                <NavLink to="/login" className="log-he">
                  Login here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
