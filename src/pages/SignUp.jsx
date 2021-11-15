import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "../assets/styles/register.css";
import { BASEURL } from "../config/api";

export default function SignUp() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const history = useHistory();

  const signUp = () => {
    const payload = form;
    if (
      form?.fullname &&
      form?.email &&
      form?.phone &&
      form?.username &&
      form?.password
    ) {
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form className="formSignUp">
        <div className="mb-3 SU-fullName">
          <label htmlFor="e-SU" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fn-SU"
            value={form?.fullname}
            onChange={(e) => setForm({ ...form, fullname: e.target?.value })}
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
        <div className="mb-3 SU-phone">
          <label htmlFor="pn-SU" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="pn-SU"
            value={form?.phone}
            onChange={(e) => setForm({ ...form, phone: e.target?.value })}
          />
        </div>
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
