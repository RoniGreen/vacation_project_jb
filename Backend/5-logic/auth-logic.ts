//create login and register

import { OkPacket } from "mysql2/promise";
import { execute } from "../2-utils/dal";
import { InfoModel, UserModel } from "../4-models/UserModel";
import { hashPassword } from "../2-utils/hash";
import { generateToken } from "../2-utils/jwt";

export async function register(user: UserModel) {
  if (user.firstname.length < 2)
    return { errorCode: 401, message: "First name too short" };

  if (user.lastname.length < 2)
    return { errorCode: 401, message: "Last name too short" };

    isEmailCorrect(user.email);

  if (user.password.length < 4)
    return { errorCode: 401, message: "Password  too short" };

  const isEmailAllreadyExists = await isEmailExist(user);
  if (isEmailAllreadyExists === true)
    return { errorCode: 401, message: "Email already exists!" };
  const query = `INSERT INTO vacationdatabase.users VALUES(DEFAULT, ?, ?, ?, ?, 0)`;
  const [ result ] =  await execute<OkPacket>(query, [
    user.firstname,
    user.lastname,
    user.email,
    hashPassword(user.password),
  ]);

  user.id = result.insertId;
  user.token = generateToken(user);
  delete user.password;
  user.role = 0;
  return user;
}


export async function login(credentials: UserModel) {
  const { email, password } = credentials;
  if (email.length < 4)
    return { errorCode: 401, message: "EmailUsername too short." };
    
    isEmailCorrect(email);

  if (password.length < 4)
    return { errorCode: 401, message: "Password too short." };
  if (!email || !password)
    return { errorCode: 401, message: "Email or password was empty!" };
  
  const query = `SELECT * FROM vacationdatabase.users WHERE email = ? AND password = ?`
  const [ info ] = await execute<UserModel>(query, [email,hashPassword(password)]);
  if (info.length === 0) return {errorCode: 401, message: "Incorrect username or password!"}
  

  const user = <UserModel>{ ...info[0] };
  delete user.password;
  user.token =  generateToken(user);

  return user;
}

async function isEmailExist(user: UserModel) {
  const query = `SELECT * FROM vacationdatabase.users WHERE email = ?`;
  const [info] = await execute<UserModel[]>(query, [user.email]);
  return info.length > 0 ? true : false;
}

async function isEmailCorrect(email:string){
  let validRegexEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //fix bug accept email without dots such as example@examplecom
if (!email.match(validRegexEmail))
  return { errorCode: 401, message: "Invalid email address!" };
}
// export async function getAllUsers(): Promise<UserModel[]> {
//     const query = "SELECT * FROM users";
//     const  [ rows ] = await execute<UserModel[]>(query);

//     return rows;
// }

// export async function addUser(user: UserModel) {
//     user.role = 0;
//     const query = `INSERT INTO vacationdatabase.users (firstname, lastname, email, password, role)
//     VALUES (?,?,?,?,?)`;
//     const [row] = await execute<OkPacket>(query, [user.firstname, user.lastname, user.email, user.password, user.role]);

//     return row;
// }

// // SELECT * FROM vacationdatabase.vacations;

// export async function getAllVacations():Promise<VacationModal[]>{
//     const query = `SELECT * FROM vacationdatabase.vacations`;
//     const [ rows ]  =  await execute<VacationModal[]>(query);
//     return rows;
// }
