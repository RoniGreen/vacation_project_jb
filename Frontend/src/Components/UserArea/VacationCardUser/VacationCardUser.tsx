/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { VacationModel } from "../../../Models/VacationModel";
import "./VacationCardUser.css";
import { useState } from "react";
import { format } from 'date-fns';
import { set } from "../../../App/VacationSlice";
import followerService from "../../../Services/FollowerService";
import { UserModel } from "../../../Models/UserModels";
import { log } from "console";


interface VacationCardUserProps {
    vacation: VacationModel;
}

function VacationCardUser({ vacation }: VacationCardUserProps): JSX.Element {
    // console.log(vacation);
    
    const dispatch = useDispatch();
    let vacation_from_store = useSelector((state: any) => state.vacations);
   
    
    let { userInfo } = useSelector((state: any) => state.authSlice);
    let user = userInfo as UserModel | any; 
    user = user !== undefined ? user : null;

    let color='btnLikeWhite';
    let heart_color='gray'
    if (vacation.Likes === 1) {
        color='btnLikeRed';
        heart_color='red';
    }
    const[ btnColor,setBtnColor ]=useState(color);
    const[ btnColorHeart,setBtnColorHeart ]=useState(heart_color);
    const[ countLikes,setBtnCountLikes ]=useState<number|any>(vacation.Count);
    
    const dateParts_in = vacation.checkIn.toString().split("/");

    
    const month_in = parseInt(dateParts_in[1])-1; // Months are zero-indexed
    const day_in = parseInt(dateParts_in[0]);
    const year_in = parseInt(dateParts_in[2].split(" ")[0]);
    
    
    let date_t= new Date(year_in, month_in, day_in);
    let date_t_all=format(date_t, 'dd.MM.yyyy');
    const[dateAfterFormat,setdateAfterFormat]=useState(date_t_all);
   
    
    const dateParts_Out = vacation.checkOut.toString().split("/");
    const month_Out = parseInt(dateParts_Out[1]) - 1; // Months are zero-indexed
    const day_Out = parseInt(dateParts_Out[0]);
    const year_Out = parseInt(dateParts_Out[2].split(" ")[0]);
    let date_end= new Date(year_Out, month_Out, day_Out);
    
     let date_end_all=format(date_end, 'dd.MM.yyyy');
     const[dateAfterFormatEnd,setdateAfterFormatEnd]=useState(date_end_all);
     

    async function changeColorSend(vacationId:number){
        let new_vacs:any=[];
            if(btnColor=== "btnLikeWhite"){
                setBtnColor("btnLikeRed");
                setBtnColorHeart('red');
    
                if (countLikes==null ) {
                    setBtnCountLikes(1);
                } else {
                    setBtnCountLikes(countLikes+1);
                }
    
                await followerService.addLike( {vacationId: vacationId , userId:user.id} );
              
                let vac_from_store=vacation_from_store.vacations;
    
                
                vac_from_store.map((vacation_loop:any, index:number) => (
                    vacation_loop.vacationId === vacation.id
                    ? (func_new_vac(vacation_loop, 'yes'))
                    : (func_new_vac(vacation_loop, ''))
                ));
                // console.log(new_vacs);
                dispatch(set(new_vacs));
         
            }else{
                setBtnColor("btnLikeWhite");
                setBtnColorHeart('gray');
              
                await followerService.deleteLike(vacationId ,user.id);
                
                if (countLikes ===1) {
                    setBtnCountLikes(null);
                } else {
                    setBtnCountLikes(countLikes-1);
                }
    
                let vac_from_store=vacation_from_store.vacations;
    
                
                vac_from_store.map((vacation_loop:any, index:number) => (
                    vacation_loop.vacationId === vacation.id
                    ? (func_new_vac(vacation_loop, 'no'))
                    : (func_new_vac(vacation_loop, ''))
                ));
    
                dispatch(set(new_vacs));
            }
    
            function func_new_vac(vacation_loop:any, val:string) {
                let temp = {...vacation_loop};
                 
                if (val !== '') {
                    temp.Likes=val;  
                    if (val ==='yes') {
                        temp.count= temp.count+1;
                    } else {
                        temp.count= temp.count-1;
                    }
                   
                    new_vacs.push(temp);
                } else {
                    new_vacs.push(temp);
                }
            }
     
    } 
    
    
    
    
    let back=`url(http://localhost:3001/1-assets/${vacation.image})`;
    let background_image = {backgroundImage: back};
   
    
    return (
        <div className="VacationCardUser">
			<div>  
                <div className="image-area" style={background_image}>
                    <button  onClick={()=>changeColorSend(vacation.id)} className= {`button-like-class ${btnColor}` }> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={btnColorHeart} className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>&nbsp;Like {countLikes}
                    </button>
                  
                    <h5 className="destination">{vacation.vacationDestination}</h5>
                </div>
                <div className="divForDate"> &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>&nbsp;&nbsp;
                     <span>{dateAfterFormat} - {dateAfterFormatEnd}</span> 
                </div>
                <div className="desc_price">
                    <span className="description">
                            {vacation.vacationDescription}
                          <br/> 
                        <div className="price">
                              ${vacation.price}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default VacationCardUser;
