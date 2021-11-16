import React, { useState} from 'react'
import { useHistory } from 'react-router';
import "../assets/styles/login.css"

function Login() {
	const [emaillog, setEmaillog] = useState(" ");
	const [passwordlog, setPasswordlog] = useState(" ");

	const history = useHistory()

	function handleLogin(e) {
		e.preventDefault();
		let pass = localStorage.getItem("Password").replace(/"/g, "");
		let mail = localStorage.getItem("Email").replace(/"/g, "");
		// .replace(/"/g,"") is used to remove the double quotes for the string
		console.log(passwordlog, "passlog")
		console.log(emaillog, "emaillog");
		console.log(pass, "pass");
		console.log(mail, "mail");

		if (!emaillog || !passwordlog) {
				console.log("EMPTY");

		} else if ((passwordlog !== pass) || (emaillog !== mail)) {
				console.log("salah");
		} else {
				console.log("berhasil");
		}

		const login = {
			password: passwordlog,
			email: emaillog,
		}

		localStorage.setItem("login", JSON.stringify(login));
		history.goBack()
	}

	return (
		<div className="login-container">
		<div className="outer">
			<div className="inner">
				<div>
					<form onSubmit={handleLogin}>
						<h3>Login</h3>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
						</div>

						<div className="form-group">
							<label>Password</label>
							<input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
						</div>

						<button type="submit" className="btn-login">Login</button>
							<p className="text-login">
								Didn't have any account?<a href="/register"> Register here</a>
							</p>
					</form>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Login
