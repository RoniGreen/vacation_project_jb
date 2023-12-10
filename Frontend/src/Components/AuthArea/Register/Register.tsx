/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { UserModel } from "../../../Models/UserModels";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../../../Services/AuthService";
import { useDispatch } from "react-redux";
import { login } from "../../../App/AuthSlice";

function Register(): JSX.Element {
  const dispatch=useDispatch();
  const { register, handleSubmit, formState } = useForm<UserModel>();
  const [registerRes, setRegisterRes] = useState("");
  const navigate = useNavigate();

  async function registerForm(user: UserModel): Promise<void> {

    const userInfo: any = await authService.register(user);
   
        // setRegisterRes('registered successfully');
    //   console.log(userInfo.data);
        
        dispatch(login(userInfo.data));
        navigate("/");
      
  }

  return (
    <div className="Register">
      <div className="registerForm">
        <p>Register</p>
        <form onSubmit={handleSubmit(registerForm)}>
          <label>First Name:</label>
          <br />
          <input
            type="text"
            {...register("firstname", {
              minLength: 2,
              required: "Insert Name",
            })}
          />{" "}
          <br />
          <span className="Error">{formState.errors.firstname?.message}</span>
          <br />
          <label>Last Name:</label>
          <br />
          <input
            type="text"
            {...register("lastname", {
              minLength: 2,
              required: "Insert Last Name",
            })}
          />
          <br />
          <span className="Error">{formState.errors.lastname?.message}</span>
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            {...register("email", { minLength: 4, required: "Insert email" })}
          />
          <br />
          <span className="Error">{formState.errors.email?.message}</span>
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            {...register("password", { min: 4, required: "Insert Password" })}
          />
          <br />
          <span className="Error">{formState.errors.password?.message}</span>
          <br />
          <button className="btnRegister">Register</button>
          <br />
          <br />
          <span>Already Member?</span>
          <br />
          <NavLink to={"/login"}>Login</NavLink>
          {/* <div className="Error">{registerRes}</div> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
