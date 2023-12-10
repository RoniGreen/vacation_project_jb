import { Route, Routes } from "react-router-dom";
import "./Content.css";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import Vacations from "../../Vacations/Vacations";
import AddVacation from "../../AdminArea/AddVacation/AddVacation";
import EditVacation from "../../AdminArea/EditVacation/EditVacation";
import ViewReport from "../../AdminArea/ViewReport/ViewReport";
import AdminArea from "../../AdminArea/AdminArea";
// import Vacations from "../../Vacations/Vacations";

function Content(): JSX.Element {
    return (
        <div className="Content">
			<Routes>
                <Route path="/login" element ={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="" element={<Vacations/>}/>
                <Route path="/add" element ={<AddVacation/>}/>
                <Route path="/edit" element ={<EditVacation/>}/>
                <Route path="/admin" element ={<AdminArea/>}/>
                <Route path="/view_report" element ={<ViewReport/>}/>
            </Routes>
        </div>
    );
}

export default Content;
