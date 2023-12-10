/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./UserArea.css";
import { ResVacations, VacationModel } from "../../Models/VacationModel";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "../../Models/UserModels";
import { set } from "../../App/VacationSlice";
import vacationsService from "../../Services/VacationsService";
import VacationCardUser from "./VacationCardUser/VacationCardUser";
import { log } from "console";
import { format } from "date-fns";

function UserArea(): JSX.Element {
  const [vacationsFilter, setVacationsFilter] = useState("all");
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [ResVacationsdata, setResVacations] = useState<ResVacations>();
  const [vacations_data_page, setVacations] = useState<VacationModel[]>();
  const dispatch = useDispatch();

  function nextPage() {
    let newOffse = offset + 10;
    setOffset(newOffse);
    setPage(page + 1);
  }

  function prevPage() {
    let newOffse = offset - 10;
    setOffset(newOffse);
    setPage(page - 1);
  }

  let user = useSelector((state: any) => state.authSlice);
  let { userInfo } = user as UserInfo;
  let { id, token } = userInfo as Number | any;

  token = token !== undefined ? token : null;

  

  

  // get all vacations
  useEffect(() => {
    vacationsService
      .getAllVacations(id, 10, 0, token).then((vacations) => {
        if (vacations !== undefined) {
         
          // setVacations(vacations.rows);
            

          dispatch(set(vacations.rows));
        }
      });
  }, []);
  
  let vacation_from_store =  useSelector((state: any) => state.vacations);
  
  
    


  
  // get 10 per page
  useEffect(() => {
    vacationsService.getAllVacations(id, 10, offset, token).then((vacations) => {
      // console.log(vacations.rows);
      
      setResVacations(vacations);
      if (vacations !== undefined) {
        
        // console.log(vacations);
        
        // console.log(vacations.rows);
        
        setVacations(vacations.rows);
        dispatch(set(vacations.rows));
      }
    });
  }, [offset, vacation_from_store]);

  
     

const today = new Date();



    let vac_from_store = vacation_from_store.vacations as VacationModel[];
  
    
    
  return (
    <div className="general_div">
      <button className="filter_btn" onClick={() => setVacationsFilter("all")}>
        Show All
      </button>

      <button className="filter_btn" onClick={() => setVacationsFilter("selected_only")}>
        Show Selected Only
      </button>

      <button className="filter_btn" onClick={() => setVacationsFilter("not_started")}>
        Not Started
      </button>

      <button className="filter_btn" onClick={() => setVacationsFilter("in_duration")}>
        In Duration
      </button>


      {vacationsFilter === "all" ? (
        <div>
          <div className="UserArea">
            {vacations_data_page === undefined
              ? "Loading..."
              : vacations_data_page && vacations_data_page.length === 0
              ? "No Vacations Found"
              : vacations_data_page &&
                vacations_data_page.map((vacations_data_page) => (
                  <VacationCardUser
                    key={vacations_data_page.id}
                    vacation={vacations_data_page}
                  />
                ))}
          </div>
          <div className="pagination_vac">
            <div>
              {" "}
              page {page} from{" "}
              {ResVacationsdata
                ? Math.round(ResVacationsdata.rows_all / 10)
                : ""}
            </div>
            {page >= 2 ? <button onClick={prevPage}> Prev </button> : ""}{" "}
            {ResVacationsdata &&
            page < Math.round(ResVacationsdata.rows_all / 10) ? (
              <button onClick={nextPage}> NEXT </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      {vacationsFilter === "selected_only" ? (
        <div>
        <div className="UserArea">
          {vac_from_store === undefined
            ? "Loading..."
            : vac_from_store.length === 0
            ? "No Vacations Found"
            : vac_from_store.map((vacation: any) =>
                vacation.Likes === 1 ? (
                  <VacationCardUser
                    key={vacation.id}
                    vacation={vacation}
                  />
                ) : (
                  ""
                )
              )}
        </div>
        <div className="pagination_vac">
            <div>
              {" "}
              page {page} from{" "}
              {ResVacationsdata
                ? Math.round(ResVacationsdata.rows_all / 10)
                : ""}
            </div>
            {page >= 2 ? <button onClick={prevPage}> Prev </button> : ""}{" "}
            {ResVacationsdata &&
            page < Math.round(ResVacationsdata.rows_all / 10) ? (
              <button onClick={nextPage}> NEXT </button>
            ) : (
              ""
            )}
          </div>

        </div>
      ) : (
        ""
      )}

      {/* {vacationsFilter === "not_started" ? (
        <div className="UserArea">
          {vac_from_store === undefined
            ? "Loading..."
            : vac_from_store.length === 0
            ? "No Vacations Found"
            : vac_from_store.map((vacation: any) => 

             new Date(vacation.checkIn) >= today ? (
              <VacationCardUser
                key={vacation.id}
                vacation={vacation}
              />
            ) : (
              ""
            )
              )}
        </div>
      ) : (
        ""
      )} */}

{vacationsFilter === "not_started" && (
  <div className="UserArea">
    {vac_from_store === undefined ? (
      "Loading..."
    ) : vac_from_store.length === 0 ? (
      "No Vacations Found"
    ) : (
      vac_from_store.map((vacation: any) => {
        const dateParts_In = vacation.checkIn.toString().split("/");
        const month_In = parseInt(dateParts_In[1]) - 1; // Months are zero-indexed
        const day_In= parseInt(dateParts_In[0]);
        const year_In = parseInt(dateParts_In[2].split(" ")[0]);
        let date_start = new Date(year_In, month_In, day_In);
        let date_start_all = format(date_start, 'dd.MM.yyyy');

        console.log(date_start_all);
        
        return new Date(date_start_all).getTime() >= today.getTime() ? (
          <VacationCardUser
            key={vacation.id}
            vacation={vacation}
          />
        ) : null;
      })
    )}
  </div>
)}

      {/* {vacationsFilter === "in_duration" ? (
        <div className="UserArea">
          {vac_from_store === undefined
            ? "Loading..."
            : vac_from_store.length === 0
            ? "No Vacations Found"
            : vac_from_store.map((vacation: any) =>
                // new Date(vacation.checkIn) <= today &&
                new Date(vacation.checkOut) >= today ? (
                  <VacationCardUser
                    key={vacation.id}
                    vacation={vacation}
                  />
                ) : (
                  ""
                )
              )}
        </div>
      ) : (
        ""
      )} */}
     

     {vacationsFilter === "in_duration" ? (
        <div className="UserArea">
          {vac_from_store === undefined
            ? "Loading..."
            : vac_from_store.length === 0
            ? "No Vacations Found"
            : vac_from_store.map(((vacation: any) => {
              const dateParts_In = vacation.checkIn.toString().split("/");
              const month_In = parseInt(dateParts_In[1]) - 1; // Months are zero-indexed
              const day_In= parseInt(dateParts_In[0]);
              const year_In = parseInt(dateParts_In[2].split(" ")[0]);
              let date_start = new Date(year_In, month_In, day_In);
              let date_start_all = format(date_start, 'dd.MM.yyyy');
      
              console.log(date_start_all);

              const dateParts_Out = vacation.checkOut.toString().split("/");
              const month_Out = parseInt(dateParts_Out[1]) - 1; // Months are zero-indexed
              const day_Out= parseInt(dateParts_Out[0]);
              const year_Out = parseInt(dateParts_Out[2].split(" ")[0]);
              let date_end = new Date(year_Out, month_Out, day_Out);
              let date_end_all = format(date_end, 'dd.MM.yyyy');
      
              console.log(date_end_all);
              
              return new Date(date_start_all).getTime() <= today.getTime() &&
              new Date(date_end_all).getTime() >= today.getTime() ? (
                <VacationCardUser
                  key={vacation.id}
                  vacation={vacation}
                />
              ) : null;
            })
              )}
        </div>
      ) : (
        ""
      )}


    </div>
  );
}

export default UserArea;
