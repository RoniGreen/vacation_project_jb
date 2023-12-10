import "./Header.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../App/AuthSlice";
import { log } from "console";
import { UserModel } from "../../../Models/UserModels";

function Header(): JSX.Element {
  const { userInfo } = useSelector((state: any) => state.authSlice);
  const newUserInfo = userInfo as UserModel;
  const dispatch=useDispatch();
  
  return (
    <div className="Header">
      <h1>Vacations</h1>
      <br />
      <br />
      <br />

      {newUserInfo == null ? (
        <div>
          <NavLink to={"/register"} className="auth">
            Register
          </NavLink>
          <NavLink to={"/login"} className="auth">
            Login
          </NavLink>
          <br></br>
        </div>
      ) : (
        <div onClick={() => dispatch(logout())}>
          {newUserInfo.firstname}{' '}{newUserInfo.lastname}&nbsp;&nbsp;&nbsp;&nbsp;
          
          <span className="logout_link">logout</span>
        </div>
      )}
    </div>
  );
}

export default Header;
