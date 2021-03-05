import React from "react";
import "./login.css";

export const LoginScreen = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Log In</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="em@il.com"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="******"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Sign Up</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="em@il.com"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="******"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repeat password"
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
