import { RowDataPacket } from "mysql2";
import { execute } from "../2-utils/dal";
import { UserModel } from "../4-models/UserModel";

export async function getUserRole(name: string){
    
    const query = "SELECT role FROM vacationdatabase.users where firstname = ?"
    
   const [ user ] = await execute<RowDataPacket>(query, [name]); 
   return user[0].role;
}
