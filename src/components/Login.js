import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", response.data.token);

     navigate('/viewlist')
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h1 className="mb-4">Login Page</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {loginError && <div className="text-danger mb-3">{loginError}</div>}
            <div className="mb-3 mt-2">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
          </form>
          <p className="mt-3">
            Don't have an account?{" "}
            <span>
              <NavLink to="/register">Register</NavLink>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
