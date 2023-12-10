import { useDispatch, useSelector } from "react-redux";
import "./AdminArea.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResVacations, VacationModel } from "../../Models/VacationModel";
import vacationsService from "../../Services/VacationsService";
import { set } from "../../App/VacationSlice";
import { UserInfo } from "../../Models/UserModels";
import { CSVLink } from "react-csv";
import VacationCardAdmin from "./VacationCardAdmin/VacationCardAdmin";

function AdminArea(): JSX.Element {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [ResVacationsdata, setResVacations] = useState<ResVacations>();
  const [vacations, setVacations] = useState<VacationModel[]>();

  let user = useSelector((state: any) => state.authSlice);

  let { userInfo } = user as UserInfo;
  let { id, token } = userInfo as Number | any;

  token = token !== undefined ? token : null;

  let vacation_from_store = useSelector((state: any) => state.vacations);


  useEffect(() => {
    if (userInfo == null) {
      navigate("/login");
    }
  }, [userInfo, vacation_from_store]);

  useEffect(() => {
    vacationsService.getAllVacations(id, 10, 0, token).then((vacations_r) => {

    
      setResVacations(vacations_r); //should know about count all that's why im using resvacation
      if (vacations_r !== undefined) {
        setVacations(vacations_r.rows);
        dispatch(set(vacations_r.rows));
      }
    });
  }, []);

   let vac_from_store = vacation_from_store.vacations;
    
   let data:any=[];
  
   
     if (vacations) {
         vacations.map((vacation) => (
             data.push ( {'destination':vacation.vacationDestination,
                        'count':vacation.Count})
         ));
     }
 
     const headers = [
         { label: "Vacation", key: "destination" },
         { label: "likes", key: "count" },
       ];
  
        
       const csvReport = {
         data: data,
         headers: headers,
         filename: 'vacations_likes_report.csv'
       };
 
     function view_report() {
        
          navigate("/view_report", {state: {vacations}});
     }
    
  return <div className="AdminArea">
    <NavLink to="/add" className="add_vac_link">Add Vacation</NavLink>
        <div className="view_repot_link" onClick={view_report}>View report</div>
        <CSVLink  className="add_vac_link" {...csvReport}>Export to CSV</CSVLink>


        {vac_from_store === undefined
                    ? 'Loading...'
                    : vac_from_store.length === 0
                        ? 'No Vacations Found'
                        : vac_from_store.map((vacation:any) => (
                        <VacationCardAdmin 
                        key={vacation.id} 
                        vacation={vacation} />
                    ))}
            
    </div>;
}

export default AdminArea;
