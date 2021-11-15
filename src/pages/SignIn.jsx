import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const onSignIn = () => {
    if (form?.username && form?.password) {
      localStorage.setItem("dataSignIn", JSON.stringify(form));
      history.goBack();
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <form className="formSignIn">
        <div className="mb-3 SI-username">
          <label htmlFor="e-SI" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="e-SI"
            value={form?.username}
            onChange={(e) => setForm({ ...form, username: e.target?.value })}
          />
        </div>
        <div className="mb-3 SI-password">
          <label htmlFor="pass-SI" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass-SI"
            value={form?.password}
            onChange={(e) => setForm({ ...form, password: e.target?.value })}
          />
        </div>

        <p className="form-text toRegist pb-5">
          Not already have an account?
          <NavLink to="/signUp">Sign Up</NavLink>
        </p>

        <div className="SI-btn text-center">
          <button
            type="submit"
            className=" btn btn-outline-dark "
            onClick={() => onSignIn()}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
