import axios from "axios";
import config from "../Utils/config";
import { VacationModel } from "../Models/VacationModel";




class VacationsService {
  async getAllVacations(userId: number, limit: number, offset: number, token?: any) {
    

    token = token !== undefined ? token : null;
    let myFormData= {'userId': userId, 'limit': limit, 'offset': offset};
    
    
    try {
      const { data } = await axios.get(config.VACATIONS_URL, {
        params: { myFormData },
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
        
        
      return data;
    } catch (e) {
        console.log(e);
  
    }
  }

  async addVacation(vacation: VacationModel | any): Promise<any> {
    // console.log(vacation);
    
    const fd= new FormData();

    fd.append("file", vacation.image[0]);
    fd.append("fileName", vacation.image[0]['name']);

    fd.append("vacationDestination", vacation.vacationDestination);
    fd.append("vacationDescription", vacation.vacationDescription);
    fd.append("checkIn", vacation.checkIn.toString());
    fd.append("checkOut", vacation.checkOut.toString());
    fd.append("price", vacation.price.toString());
    // id, vacationDestination, vacationDescription, checkIn, checkOut, price, image
    const config_post = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    // console.log(fd);
    
    try {
        let res= await axios.post(config.VACATIONS_URL, fd ,config_post);

        let final_res:any={};

        if (res.data.issues) {
              final_res.msg=res.data.issues[0].message; 
        } else {
            final_res.msg="vacation added successfuly";
        }
    //  console.log(final_res);
        return final_res;

    } catch (e) {
        alert('error post image' + e);
    }
}


async editVacation(vacation: VacationModel): Promise<any> {
  try {
    
      const fd = new FormData();
      //if user cheanged image
      if (vacation.image.length > 0) {
        // console.log(vacation.image[0]);
        
          fd.append("file", vacation.image[0]);
          fd.append("image", vacation.image[0]['name']);
      }
      // id, vacationDestination, vacationDescription, checkIn, checkOut, price, image
      fd.append("vacationDestination", vacation.vacationDestination);
      fd.append("vacationDescription", vacation.vacationDescription);
      fd.append("checkIn", vacation.checkIn.toString());
      fd.append("checkOut", vacation.checkOut.toString());
      fd.append("price", vacation.price.toString());
  
      const config_post = {     
          headers: { 'content-type': 'multipart/form-data' }
      }

     let res=  await axios.put(config.VACATIONS_URL + vacation.id, fd ,config_post );

     let final_res:any={};
   
     
      if (res.data.issues) {
          final_res.msg=res.data.issues[0].message; 
      } else {
          final_res.msg="vacation updated successfuly";
      }

     return final_res;


  } catch (e) {
      alert('error from service edit');
  }
}


  public async deleteVacation(vacationId: number): Promise<void> {
    await axios.delete<void>(config.VACATIONS_URL + vacationId);
}
}



const vacationsService = new VacationsService();

export default vacationsService;
