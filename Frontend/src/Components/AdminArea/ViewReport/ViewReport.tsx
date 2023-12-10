import "./ViewReport.css";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useLocation,useNavigate} from "react-router-dom";
import {  Chart ,registerables} from "chart.js";

import { useSelector } from "react-redux"
import { UserInfo } from "../../../Models/UserModels";
import { VacationModel } from "../../../Models/VacationModel";

Chart.register(...registerables);

function ViewReport(): JSX.Element {

  const navigate = useNavigate();
  let user = useSelector((state: any) => state.authSlice);
  let { userInfo } = user as UserInfo;

  useEffect(() => {
      if (userInfo == null) {
          navigate("/login"); 
      }
  },[userInfo]);
  
    const {state} = useLocation();
    const { vacations } = state;
  
  
    const [chartData, setChartData] = useState({
        labels: vacations.map((vac: VacationModel) => vac.vacationDestination), 
        datasets: [
          {
            label: "Users Likes ",
            data: vacations.map((vac: VacationModel) => vac.Count),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 4
          }
        ]
      });
    
    return (
       <div>
		
            <div className="chart-container">
            <h1 style={{ textAlign: "center" }}> Vacations - Likes</h1>
            <Bar
                data={chartData}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: "Vacations likes"
                    },
                    legend: {
                    display: false
                    }
                }
                }}
            />
            </div>
        </div>
    );
}

export default ViewReport;

