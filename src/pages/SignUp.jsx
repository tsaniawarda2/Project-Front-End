import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import "../assets/styles/signUp.css";
import { BASEURL } from "../config/api";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const signUp = () => {
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
          localStorage.setItem("dataSignIn", JSON.stringify(data));
          history.goBack();
          console.log(data, "=====data");
        })
        .catch((error) => {
          console.log(error);
          swal("Here's the title!", "...and here's the text!");
        });
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form className="formSignUp">
        <div className="mb-3 SU-userName">
          <label htmlFor="e-SU" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="user-SU"
            value={form?.username}
            onChange={(e) => setForm({ ...form, username: e.target?.value })}
          />
        </div>
        <div className="mb-3 SU-email">
          <label htmlFor="e-SU" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="e-SU"
            value={form?.email}
            onChange={(e) => setForm({ ...form, email: e.target?.value })}
          />
        </div>
        <div className="mb-3 SU-password">
          <label htmlFor="pass-SU" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass-SU"
            value={form?.password}
            onChange={(e) => setForm({ ...form, password: e.target?.value })}
          />
        </div>

        <p className="form-text toRegist pb-5">
          Already have an account?
          <NavLink to="/signIn">Sign In</NavLink>
        </p>

        <div className="SU-btn text-center">
          <button
            type="submit"
            className=" btn btn-outline-dark "
            onClick={() => signUp()}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
