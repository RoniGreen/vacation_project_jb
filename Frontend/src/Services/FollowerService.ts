import axios from 'axios';
import { VacationModel } from '../Models/VacationModel';
import config from '../Utils/config';
import { FollowerModel } from '../Models/FollowerModel';

class FollowerService {
   
    // async getCountAlllikes(vacationID: VacationModel): Promise<FollowerModel[]> {
    //     try {
    //         let vacationID=3
    //         const { data } = await axios.get<FollowerModel[]>(config.LIKES_COUNT_URL + vacationID);
    //         console.log("mount of likes"+data)
    //         return data;
    //     } catch (e) {
    //         alert('error');
    //         return [];
    //     }
    // }


    //עובד, נכון
    async addLike(follower: FollowerModel): Promise<any> {
        try {
            await axios.post(config.LIKES_URL, follower);
        } catch (e) {
            alert('error');
        }
    }

    
//     //שיניתי לוודא שנכון
    // public async deleteLike(vacationID: number, userID:number): Promise<void> {
    //     await axios.delete<void>(config.VACATIONS_URL + vacationID+userID);
    // }
    

    public async deleteLike(vacationId: number, userId:number): Promise<void> {
      let likeBoth={
        vacationId: vacationId,
        userId: userId
      }

    //   console.log(likeBoth);
        await axios.delete<void>(config.LIKES_URL+ "/unfollow", {data:likeBoth});
    }


}
                                        
const followerService = new FollowerService(); // singleton
export default followerService;