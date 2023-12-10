import jwtDecode from "jwt-decode";
import { UserModel } from "../Models/UserModels";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthSlice {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: number;
}

let initialState = null;

const token = window.localStorage.getItem("token");

if (token) {
  const { firstname } = jwtDecode<UserModel>(token);
  initialState = firstname;
  // console.log(firstname);
}

const authSlice = createSlice({
  name: "auth",
  initialState: { userInfo: <UserModel | any>initialState },
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      const token = action.payload.token;
      const userInfo = jwtDecode<UserModel>(token);
      // console.log(userInfo);
      
      window.localStorage.setItem("token", token);
      state.userInfo = action.payload;
        
      return state;
    },
    logout: (state) => {
      state.userInfo = null;
      window.localStorage.removeItem("token");
      return state;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
