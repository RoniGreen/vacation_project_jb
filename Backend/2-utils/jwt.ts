import { sign } from "jsonwebtoken";
import { UserModel } from "../4-models/UserModel";


export function generateToken(user: UserModel){
    return sign({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        id: user.id
    }, process.env.JWT_PASSWORD, {expiresIn: '2h'})
}