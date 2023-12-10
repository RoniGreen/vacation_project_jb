import { execute } from "../2-utils/dal";
import { FollowerModel } from "../4-models/FollowerModel";


export async function getLikesCount(id: number) {
    // SELECT * FROM vacationdatabase.vacationslikes WHERE vacationId = ?;
    //SELECT COUNT(userId) AS NumberOfLikes FROM vacationdatabase.vacationslikes where vacationId = ?;
    const query = "SELECT COUNT(userId) AS NumberOfLikes FROM vacationdatabase.vacationslikes where vacationId = ?";
    const  [ likesCount ] = await execute(query, [id]);
    return likesCount;
}


//for example if user id 2 matches with vacation id 4 it means user likes/follow this trip , elso should return empty so it means user dont follow
export async function isUserLikes(follower) {
    const query = "SELECT * FROM vacationdatabase.vacationslikes WHERE userId = ? AND vacationId = ?";
    const [ singleFollow ] = await execute(query, [follower.userId, follower.vacationId]);
    return singleFollow;
}



export async function followAsync(follower: FollowerModel) {
    const query = "INSERT INTO vacationdatabase.vacationslikes VALUES(? , ?)";
    const [ newFollower ] = await execute(query, [follower.vacationId, follower.userId])
    // updateFollowersCount(follower.vacationId);
    return newFollower;
}

export async function unFollowAsync(follower: FollowerModel) {
    const sql = "DELETE FROM vacationdatabase.vacationslikes WHERE userID = ? AND vacationId = ?";
    const [ removeFollower ] = await execute(sql, [follower.userId, follower.vacationId]);
    // updateFollowersCount(follower.vacationId);
    return removeFollower;
}

async function updateFollowersCount(vacationId) {
    const newFollowersCount = await getLikesCount(vacationId);
    const uniqueUpdate = {
        vacationId,
        followCount: newFollowersCount.length
    }
    // socketHelper.vacationUpdated(uniqueUpdate);
}
