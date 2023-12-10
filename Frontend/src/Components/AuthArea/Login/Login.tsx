/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from "react-redux";
import "./Login.css";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { UserModel } from "../../../Models/UserModels";
import authService from "../../../Services/AuthService";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { login } from "../../../App/AuthSlice";
import { log } from "console";

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<UserModel>();
  const navigate = useNavigate();
  const [ userLoginForm, setUserLoginForm ] = useState<UserModel | any>('');

    async function loginForm(user: UserModel){
        let userLoginInfo: any = await authService.login(user);
        // console.log(userLoginInfo);

        

        if (userLoginInfo.token === undefined){
          if (userLoginInfo.message.length > 0){
            setUserLoginForm(userLoginInfo.message);
          }else{

            setUserLoginForm(userLoginInfo);
          }
        }else {
            dispatch(login(userLoginInfo))
            navigate("/");
        }


    }

 
  return <div className="Login">
        <div className="loginForm">
            <p>Login</p>
            <form onSubmit={handleSubmit(loginForm)}>

                <label>Email:</label><br/>
                <input type="email" {...register("email", { minLength: 4, required: "Insert email" })} /><br/>
                <span className="Error">{formState.errors.email?.message}</span><br/>

                <label>Password:</label><br/>
                <input type="password" {...register("password", { minLength: 4, required: "Insert Password, Password must be minimum four tags" })} /><br/>
                <span className="Error">{formState.errors.password?.message}</span><br/>

                <button className="btnLogin">Login</button><br/>
                <span>don't have account?</span><br/>
                <NavLink to={"/register"}>register now</NavLink> 
                <div className="Error"> {userLoginForm} </div>

            </form>
          </div>
  </div>;
}

export default Login;
