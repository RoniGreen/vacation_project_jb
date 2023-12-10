import { OkPacket } from "mysql2";
import { execute } from "../2-utils/dal";
const path = require("path");
import { v4 as uuidv4 } from "uuid";
import { VacationModel } from "../4-models/VacationModel";
import { safeDelete } from "../helpers/files-helper";

export async function getAllVacations(
  userId: string,
  limit: string,
  offset: string
) {
  // const query = `SELECT vacations.id, vacationDestination, vacationDescription, date_format(checkIn, '%d/%m/%Y - %H:%i') as checkIn, date_format(checkIn, '%d/%m/%Y - %H:%i') as checkOut, price, image, (not isnull(vacationslikes.userId)) as Likes, COALESCE(t1.count, 0) as Count FROM vacations left join vacationslikes on vacationslikes.vacationId = vacations.id AND vacationslikes.userId = ? left join (select  count(*) as count ,vacationId from vacationdatabase.vacationslikes GROUP BY vacationID) t1 on vacations.id = t1.vacationId where vacations.checkOut >= curdate() order by Likes desc limit ?, ?`;
  const query = `SELECT vacations.id, vacationDestination, vacationDescription, date_format(checkIn, '%d/%m/%Y - %H:%i') as checkIn,
  date_format(checkOut, '%d/%m/%Y - %H:%i') as checkOut, price, image, (not isnull(vacationslikes.userId)) as Likes, 
  COALESCE(t1.count, 0) as Count
FROM vacations
LEFT JOIN vacationslikes ON vacationslikes.vacationId = vacations.id AND vacationslikes.userId = ?
LEFT JOIN (SELECT  count(*) as count ,vacationId FROM vacationdatabase.vacationslikes GROUP BY vacationID) t1 ON vacations.id = t1.vacationId
ORDER BY Likes DESC 
LIMIT ? offset ?`;
  const [vacations] = await execute(query, [userId, limit, offset]);
  // WHERE vacations.checkOut >= curdate()
  const query_all = "select count(*) as count_all from  vacationdatabase.vacations";
  const [rows_all] = await execute<VacationModel[]>(query_all);

  let res_final = { rows_all: rows_all[0]["count_all"], rows: vacations };

  return res_final;
}

export async function getSingleVacation(id: number) {
  const query = `select vacations.id , vacationDestination, DATE_FORMAT(checkIn, '%d/%m/%Y - %H:%i') as checkIn,
    DATE_FORMAT(checkOut, '%d/%m/%Y - %H:%i') as checkOut , price , vacationDescription , image from vacations Where id = ?`;
  const [singleVacation] = await execute(query, [id]);
  return singleVacation;
}

export async function addVacation(
  destination: string,
  description: string,
  checkIn: Date,
  checkOut: Date,
  price: number,
  image_path: string
) {
  const query = `INSERT INTO vacationdatabase.vacations(vacationDestination, vacationDescription, checkIn, checkOut, price , image) VALUES (?,?,?,?,?,?);`;
  const [info] = await execute<OkPacket>(query, [
    destination,
    description,
    checkIn,
    checkOut,
    price,
    image_path,
  ]);

  const id = info.insertId;

  return {
    id,
    destination,
    description,
    checkIn,
    checkOut,
    price,
    image_path,
  };
}

export async function updateVacation(
  vacation: VacationModel,
  image_name: any

) {
  
  console.log(vacation);
  
  let query = `UPDATE vacationdatabase.vacations SET vacationDestination = ?, vacationDescription = ?, checkIn = ?, checkOut = ?, price = ?`;
  let values = [];
  if (image_name === null) {
  
    query += ` WHERE id = ?`;
    values = [
      vacation.vacationDestination,
      vacation.vacationDescription,
      vacation.checkIn,
      vacation.checkOut,
      vacation.price,
      vacation.id,
    ];
  } else {
    query += `, image = ? WHERE id = ?`;
    image_name = `${image_name}`;
    values = [
      vacation.vacationDestination,
      vacation.vacationDescription,
      vacation.checkIn,
      vacation.checkOut,
      vacation.price,
      image_name,
      vacation.id,
    ];
   
   
    
  }
  // console.log(values);
  
  const [info] = await execute<OkPacket>(query, values);
  return info.affectedRows === 0 ? null : vacation;
}

export async function deleteVacation(id: number) {
  console.log(id);

  const getImageSQL = `SELECT image FROM vacations WHERE id = ?`;
  const [info] = await execute(getImageSQL, [id]);

  const fileName_path = info[0].image;

  console.log(fileName_path);

  safeDelete(fileName_path);
  const sql = `DELETE FROM vacations WHERE id = ?`;
  await execute(sql, [id]);
}
