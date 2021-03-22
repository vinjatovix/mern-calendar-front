import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({});
  const [formRegisterValues, handleRegisterInputChange] = useForm({});
  const { lEmail, lPassword } = formLoginValues;
  const { rUsername, rEmail, rPassword, rRepeatPassword } = formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (rPassword !== rRepeatPassword) {
      return Swal.fire("Error", "Os contrasinais deben coincidir", "error");
    }
    dispatch(startRegister(rEmail, rPassword, rUsername));
  };
  return (
    <div style={{ background: "black" }}>
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Acceso</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="em@il.com"
                  name="lEmail"
                  value={lEmail}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="lPassword"
                  value={lPassword}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Entrar" />
              </div>
            </form>
          </div>

          <div className="col-md-6 login-form-2">
            <h3>Rexistro</h3>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="rUsername"
                  value={rUsername}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="em@il.com"
                  name="rEmail"
                  value={rEmail}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="rPassword"
                  value={rPassword}
                  onChange={handleRegisterInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat password"
                  name="rRepeatPassword"
                  value={rRepeatPassword}
                  onChange={handleRegisterInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  className="btnSubmit"
                  value="Crear conta"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
