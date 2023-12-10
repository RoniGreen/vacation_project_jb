import express from "express";
import {
  addVacation,
  deleteVacation,
  getAllVacations,
  getSingleVacation,
  updateVacation,
} from "../5-logic/vacations-logic";
import {
  MulterRequest,
  VacationModel,
  vacationValidation,
} from "../4-models/VacationModel";
import { UploadedFile } from "express-fileupload";
import { v4 as uuidv4, v4 } from "uuid";
import { verifyUser } from "../3-middleware/verify-logged-in";
const path = require("path");

export const vacationsController = express.Router();
//verifyUser([0]) === verify if user or admin
vacationsController.get("/", verifyUser([0]),async (req, res) => {
  try {
    // const userId = req.query.userId;
    
    // const limit = req.query.limit;
    
    // const offset = req.query.offset;
    
    const  vacations   = await getAllVacations(req.query.myFormData['userId'], req.query.myFormData['limit'], req.query.myFormData['offset']);
   
    

    res.json(vacations);
  } catch (err) {
    console.log(err);
    
    res.status(500).send(err);
  }
});

// vacationsController.get("/:id([0-9]+)", async (req, res) => {
//   try {
//     const id = +req.params.id;
//     const singleVacation = await getSingleVacation(id);
//     res.json(singleVacation);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

vacationsController.post("/", async (req, res) => {
  try {
    const vacation = req.body as VacationModel;
    console.log(vacation);
    
    const files = req.files;
    console.log(files);
    
    const image = files["file"] as UploadedFile;
    console.log(image);
    
    let image_type = image.mimetype.split("/");
    let image_name = vacation.vacationDestination + "." + image_type[1];
    let image_path = path.join(__dirname, "..","public", "1-assets", image_name);
    // let targte_path = path.join(image_path);

    image.mv(image_path);

    const addedVacation = await addVacation(
      vacation.vacationDestination,
      vacation.vacationDescription,
      vacation.checkIn,
      vacation.checkOut,
      vacation.price,
      image_name
    );

    res.json(addedVacation);

    // socketHelper.vacationAdded(addedVacation)
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

vacationsController.put("/:id([0-9]+)", async (req, res, next) => {
  try {
    
    let id = +req.params.id;
  
    const vacation = req.body as VacationModel;
    // console.log(vacation);
    
    vacation.id = id;
    let image_name = null as string;

    const files = req.files;
    
    const image = files["file"] as UploadedFile;
   
    
    if (image) {
      
      let image_type = image.mimetype.split("/");
      image_name = vacation.vacationDestination + "." + image_type[1];
      let image_path = path.join(__dirname, "..","public", "1-assets", image_name);
      // console.log(image_path);
      
      image.mv(image_path);
    }

    const upadteVacation = await updateVacation(vacation, image_name);

    res.json(upadteVacation);
  } catch (e) {
    next(e);
  }
});

vacationsController.delete("/:id([0-9]+)", async (req, res, next) => {
  try {
    const id = +req.params.id;
    await deleteVacation(id);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});
