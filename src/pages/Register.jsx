import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import "../assets/styles/login.css";
import { BASEURL } from "../config/api";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [usernameErr, setUsernameErr] = useState("");
  console.log(usernameErr, "usn err");

  function handleFormSubmit(e) {
    e.preventDefault();

    localStorage.setItem("Username", JSON.stringify(username));
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Password", JSON.stringify(password));

    const form = {
      username: username,
      email: email,
      password: password,
    };

    if (usernameErr === "") {
      const payload = form;
      if (form?.email && form?.username && form?.password) {
        //pindahin localStorage
        localStorage.setItem("dataRegister", JSON.stringify(form));
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
          .catch((error) => {
            console.log(error);
            swal("Sorry, internal server error...");
          });
      }
      history.push("/login");
    } else {
      console.log("wrong username");
    }
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
                  placeholder="Enter Username"
                  name="name"
                  onChange={(event) => {
                    if (event.target.value.length < 9) {
                      setUsername(event.target.value);
                      setUsernameErr("");
                    } else {
                      setUsernameErr(
                        "Username must be less than equals 8 characters!"
                      );
                    }
                  }}
                />
                {usernameErr && (
                  <small className="text-danger">{usernameErr}</small>
                )}
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
