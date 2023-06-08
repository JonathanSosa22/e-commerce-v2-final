import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submit = (data) => {
    setError("");
    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
      .then((res) => {
        navigate("/");
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          //
        } else {
          console.log(err.response?.data);
          setError("Invalid credentials");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="main-container">
        <form className="login" onSubmit={handleSubmit(submit)}>
          <strong>
            Welcome! <br /> Log in to continue
          </strong>
          <p className="login-message">User: john@gmail.com</p>
          <p className="login-message">Pass: john1234</p>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <div className="error-message">{error}</div>
          <button className="submit-button">Log in</button>
          <div className="switch-forms">
            Don`t have an account? <button type="button">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
