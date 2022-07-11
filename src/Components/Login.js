import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Login } from "../Redux/Action/userAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, Button } from "@mui/material";

const Login1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginUser = (data) => {
    // console.log('11111', data)
    dispatch(Login(data));

    const mytoken = localStorage.getItem("Token");
    if (mytoken) {
      toast.success(`User Login Successfully!`);
      navigate("/dashboard");
      window.location.reload(true);
      
    } else {
      toast.error(`Invalid Email or password!`);
      navigate("/login");
    }
  };

  
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit(LoginUser)}>
        <h4>
          <center>Login Form!</center>
        </h4>
        <div className="form-field">
          <TextField
            id="standard-email"
            label="Email"
            variant="standard"
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error">Email is required*</p>
          )}
        </div>
        <div className="field-form">
          <TextField
            id="standard-password"
            label="Password"
            type="password"
            variant="standard"
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <p className="error">Password is required*</p>
          )}
        </div><br/>
        <div className="field-form">
          <span>Not have an account?</span>
          <Link to="/"> Register</Link>{" "}
          <Button variant="contained" className="loginbtn" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login1;
