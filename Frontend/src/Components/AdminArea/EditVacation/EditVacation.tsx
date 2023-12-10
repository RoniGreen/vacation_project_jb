import { useLocation, useNavigate } from "react-router-dom";
import "./EditVacation.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { VacationModel } from "../../../Models/VacationModel";
import vacationsService from "../../../Services/VacationsService";
import { format } from "date-fns";
import { UserInfo } from "../../../Models/UserModels";

function EditVacation(): JSX.Element {

    const navigate = useNavigate();
    let user = useSelector((state: any) => state.authSlice);
    let { userInfo } = user as UserInfo;
   
    let { id, token } = userInfo as Number | any;

    token = token !== undefined ? token : null;

    const [error_msg, seterror_msg] = useState('');
   
    
    useEffect(() => {

        if (userInfo == null) {
            navigate("/login");
        }
    },[userInfo]);

    const { register, handleSubmit, formState, setValue  } = useForm<VacationModel>();
    
    const { state } = useLocation();
    const { vacation } = state; 
    

    async function toEditVacation(vacationTosave: VacationModel){

        vacationTosave.id = vacation.id; 
        let res = await vacationsService.editVacation(vacationTosave);
        
        if (res) {
            seterror_msg(res.msg);
        } 
    }
    

        const dateParts_Out = vacation.checkOut.toString().split("/");
        const month_Out = parseInt(dateParts_Out[1])-1; // Months are zero-indexed
        const day_Out = parseInt(dateParts_Out[0]);
        const year_Out = parseInt(dateParts_Out[2].split(" ")[0]);
        let date_end= new Date(year_Out, month_Out, day_Out);
        let date_end_all= format(date_end, 'yyyy-MM-dd');
        const [date_end_all_s, setdate_end_all_s] = useState(date_end_all);
 



        const dateParts_in = vacation.checkIn.toString().split("/");
        const month_in = parseInt(dateParts_in[1])-1; // Months are zero-indexed
        const day_in = parseInt(dateParts_in[0]);
        const year_in = parseInt(dateParts_in[2].split(" ")[0]);
        let date_start= new Date(year_in, month_in, day_in);
        let date_start_all= format(date_start, 'yyyy-MM-dd');
        const [date_start_s, setdate_start_s] = useState(date_start_all);
 
     
     const [destination, setdestination] = useState(vacation.vacationDestination);
     const [description, setdescription] = useState(vacation.vacationDescription);
     const [price, setprice] = useState(vacation.price);
 
     let image_path="http://localhost:3001/1-assets/" + vacation.image;
 
    return (
        <div className="EditVacation">
			  <div className="formWhithTitleEdit"><br/>
            
            <p>Edit Vacation</p>
            <form onSubmit={handleSubmit(toEditVacation)}>

                <label>Destination:</label><br/>
                <input type="text"  value={destination} {...register("vacationDestination", { required: true ,onChange:(event)=>setdestination(event.target.value) })} /><br/>
                 <span className="Error">{formState.errors.vacationDestination?.message}</span>

                <label>Description:</label><br/>
                <input type="text"  value={description} {...register("vacationDescription", { required: true , onChange:(event)=>setdescription(event.target.value) })}/><br/>
                  <span className="Error">{formState.errors.vacationDescription?.message}</span>

                <label>Start on:</label><br/>
                <input className="date_class" type="date" value={date_start_s} {...register("checkIn", { min: 0, required: true ,  onChange:(event)=>setdate_start_s(event.target.value) })} /><br/>
                 <span className="Error">{formState.errors.checkIn?.message}</span>

                <label>End on:</label><br/>
                <input className="date_class" type="date" value={date_end_all_s} {...register("checkOut", { min: 0, required: true ,  onChange:(event)=>setdate_end_all_s(event.target.value)})}  min={date_start_s}/><br/>
                <span className="Error">{formState.errors.checkOut?.message}</span>

                <label>price:</label><br/>
                <input type="number" value={price} {...register("price", { min: 0, max:10000, required:"Price must be positive and maximum 10.000" ,  onChange:(event)=>setprice(event.target.value)})} /><br/>
                 <span className="Error">{formState.errors.price?.message}</span>

                {/* <img src={image_path} width="188px"/> <br/> <br/> */}
                {/* build speacial hook when user uploading image change the this small image  */}
                <br />
                <input className="img_class"  type="file" accept="image/*" {...register("image")} /><br/><br/>

                <button className="Edit">Edit</button><br/>
                <button type="button" onClick={() => navigate("/")}> Cancel </button>
                   
            </form>
            </div>
        </div>
    );
}

export default EditVacation;
