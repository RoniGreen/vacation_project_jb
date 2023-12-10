import { useDispatch, useSelector } from "react-redux";
import { VacationModel } from "../../../Models/VacationModel";
import "./VacationCardAdmin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { set } from "../../../App/VacationSlice";
import vacationsService from "../../../Services/VacationsService";
import { Button, Modal } from "react-bootstrap";

interface VacationCardAdminProps {
    vacation: VacationModel;
}

function VacationCardAdmin({vacation}: VacationCardAdminProps): JSX.Element {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let vacation_from_store = useSelector((state: any) => state.vacations);

    
    const dateParts_in = vacation.checkIn.toString().split("/");

    
    const month_in = parseInt(dateParts_in[1])-1; // Months are zero-indexed
    const day_in = parseInt(dateParts_in[0]);
    const year_in = parseInt(dateParts_in[2].split(" ")[0]);
    
    
    let date_in= new Date(year_in, month_in, day_in);
    let date_in_all = format(date_in, 'dd.MM.yyyy');

    
    const[dateAfterFormat,setdateAfterFormat]=useState(date_in_all);

    const dateParts_Out = vacation.checkOut.toString().split("/");
    const month_Out = parseInt(dateParts_Out[1]) - 1; // Months are zero-indexed
    const day_Out = parseInt(dateParts_Out[0]);
    const year_Out = parseInt(dateParts_Out[2].split(" ")[0]);
    let date_end= new Date(year_Out, month_Out, day_Out);
    
     let date_end_all=format(date_end, 'dd.MM.yyyy');
  
   
     const[dateAfterFormatEnd,setdateAfterFormatEnd]=useState(date_end_all);
  
    function editFunc(vacation:VacationModel) {
      navigate("/edit", {state: {vacation}});
    }


    async function toDelete(){
      let vac_from_store=vacation_from_store.vacations;

      let new_vacs:any=[];
      vac_from_store.map((vacation_loop:any, index:number) => (
          vacation_loop.vacationID != vacation.id
          ? new_vacs.push(vacation_loop) : ''
      ));

      dispatch(set(new_vacs));
      setShow(false);

      vacationsService.deleteVacation(vacation.id);
    }

      let back=`url(http://localhost:3001/1-assets/${vacation.image})`;
      let background_image= {backgroundImage: back};

    return (
        <div className="VacationCardAdmin">
			<Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>Do you want to delete the vacation?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={toDelete}> Delete </Button>
                <Button variant="primary" onClick={handleClose}> Close </Button>
              </Modal.Footer>
            </Modal>
          <div>
            <div className="divForImage" style={background_image}>
                        <div className="divForButtons">
                        <button onClick={() => editFunc(vacation)}  className="buttonInCard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg> 
                           Edit</button>
                        <button onClick={handleShow} className="buttonInCard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg> 
                          Delete</button>
                    </div><br/><br/><br/>
                   
                    <h5 className="destination">{vacation.vacationDestination}</h5>
                </div>

                <div className="divForDate">
                &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>&nbsp;&nbsp;
                  <span>{dateAfterFormat} - {dateAfterFormatEnd}</span> 
                </div>
                <div className="desc_price">
                <span className="description">{vacation.vacationDescription}<br/> 
                <div className="price">${vacation.price}</div></span>
                </div>
            </div>
        </div>
    );
}

export default VacationCardAdmin;
