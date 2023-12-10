import axios from "axios";
import { UserModel } from "../Models/UserModels";
import config from "../Utils/config";

class AuthService {
  public async register(user: UserModel): Promise<void> {
   
    
    const res = await axios.post<any>(config.REGISTER_URL, user);
    let final_res: any = {};
    if (res.data && res.data.issues) {
      final_res.msg = res.data.issues[0].message;
    } else if (res.data.msg) {
      final_res.msg = res.data.msg;
    } else {
      final_res = res;
    }

    return final_res;
  }
  //credentail could be named user, but is better for me because of backend 
  public async login(credentials: UserModel) {
    // console.log(credentials);
    
    const res = await axios.post<any>(config.LOGIN_URL, credentials);
    // console.log(res);
    
    const userDataRes = res.data;
    // console.log(userDataRes);
    
    return userDataRes;
  }
}

const authService = new AuthService();

export default authService;
