import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Register } from "../Redux/Action/userAction";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
} from "@mui/material";

const Register1 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const RegisterUser = (data) => {
    console.log("dddd", data);
    reset();
    let userlistget = JSON.parse(localStorage.getItem("userData")) || [],
      isExist =
        userlistget.findIndex((obj) => {
          return obj.email === data.email;
        }) != -1;
    if (isExist) {
      toast.error("Email Already be taken!")
    } else {
      dispatch(Register(data));
      toast.success("You are Register sucessfully!")
    }
  };
  
  return (
    <div className="regForm">
      <form onSubmit={handleSubmit(RegisterUser)}>
        <h4>
          <center>Registration Form!</center>
        </h4>
        <div className="form-field">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            {...register("firstName", {
              required: true,
            })}
          />
          {errors?.firstName?.type === "required" && (
            <p className="error">First Name is required*</p>
          )}
        </div>
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
        <div className="form-field">
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
        </div>
        <div className="form-field">
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            variant="standard"
            {...register("number", {
              required: true,
            })}
          />
          {errors?.number?.type === "required" && (
            <p className="error">Mob. Number is required*</p>
          )}
        </div>
        <div className="form-field">
          <label>Role-type:</label>
          <input type="radio" name="role" value="user" {...register("role")} />
          <label>User</label>
          <input type="radio" name="role" value="admin" {...register("role")} />
          <label>Admin</label>
        </div>
        <span>Have an account?</span>
        <Link to="/login"> Login</Link>{" "}
        <Button variant="contained" className="regButton" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register1;
