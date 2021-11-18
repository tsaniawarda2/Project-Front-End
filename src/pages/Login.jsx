import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "../assets/styles/login.css";
import swal from "sweetalert";

function Login() {
  const [usernamelog, setUsernamelog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const history = useHistory();
  console.log(passwordlog, "passlog");
  console.log(usernamelog, "usernamelog");

  console.log(history, "history");

  function handleLogin(e) {
		e.preventDefault();
    
		// let password = localStorage.getItem("Password")
		// let username = localStorage.getItem("Username")
		// console.log(passwordlog, "passlog")
		// console.log(usernamelog, "usernamelog");
    let register = JSON.parse(localStorage.getItem("dataRegister"))
    let password = register?.password
    let username = register?.username
    // console.log(register.password, "password");
    // console.log(register.username, "username");
		

		if(password == null || username == null){
			console.log("belum register");
		} else {
		password = password.replace(/"/g, "");
		username = username.replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string
		if (!usernamelog || !passwordlog) {
			swal({
				title: "Try Again!",
				text: "All field must be filled, try again!",
				icon: "warning",
				button: "Ok!",
			});
				console.log("EMPTY");
		  } else if ((passwordlog !== password) || (usernamelog !== username)) {
				console.log("salah");
				swal({
					title: "Try Again!",
					text: "Your username or password wrong, try again!",
					icon: "warning",
					button: "Ok!",
				});
		  } else {
			const login = {
				password: passwordlog,
				username: usernamelog,
			}
	
			// console.log(login);
	
			localStorage.setItem("dataLogin", JSON.stringify(login));
			console.log("berhasil");
			
			history.goBack()
		  }
	  }
  }

  return (
    <div className="login-container">
      <div className="outer">
        <div className="inner">
          <div>
            <form onSubmit={handleLogin}>
              <h3>Login</h3>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  onChange={(event) => setUsernamelog(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={(event) => setPasswordlog(event.target.value)}
                />
              </div>

              <button type="submit" className="btn-login">
                Login
              </button>
              <p className="text-login">
                Don't have any account?{" "}
                <NavLink to="/register" className="log-he">
                  Register here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
