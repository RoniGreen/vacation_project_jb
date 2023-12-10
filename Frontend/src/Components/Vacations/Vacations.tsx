/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import AdminArea from "../AdminArea/AdminArea";
import UserArea from "../UserArea/UserArea";
import "./Vacations.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { UserInfo } from "../../Models/UserModels";

function Vacations(): JSX.Element {
    const navigate = useNavigate();
    let user = useSelector((state: any) => state.authSlice);
    let  { userInfo }  = user as UserInfo;
    // console.log(userInfo.firstname);
    
    
    useEffect(() => {

    if (userInfo == null) {
        navigate("/login");
    }
    },[userInfo]);
    return (
        <div className="Vacations">
			{userInfo != null ? (
            <span>
           
            {userInfo.role === 1 ? 
			<AdminArea/>
            : <UserArea/>} </span>) : ''}
        </div>
    );
}

export default Vacations;
