import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

export interface VacationModel {
  id?: number;
  vacationDestination: string;
  vacationDescription: string;
  checkIn: Date;
  checkOut: Date;
  price: number;
  image?: string;
  count?: number;
  likes?: number;
  usersLikesCount?: number;
}

export interface MulterRequest extends Request {
  file: any;
}

export const vacationchema = z
  .object({
    price: z
      .number()
      .min(0, { message: "Price should be positive" })
      .max(10000, { message: "Price should be maximum 10000" }),
    checkIn: z.date(),
    checkOut: z.date(),
    vacationDestination: z.string({
      required_error: "Destination is required",
    }),
    vacationDescription: z.string({
      required_error: "Description is required",
    }),
  })
  .refine((data) => data.checkIn <= data.checkOut, {
    message: "EndDate not bigger then startDate ",
  })
  .refine((data) => data.checkIn > new Date(), {
    message: "StartDate cant be in the past ",
  });

export const vacationchemaedit = z
  .object({
    price: z
      .number()
      .min(0, { message: "Price should be positive" })
      .max(10000, { message: "Price should be maximum 10000" }),
    checkIn: z.date(),
    checkOut: z.date(),
    vacationDestination: z.string({
      required_error: "Destination is required",
    }),
    vacationDescription: z.string({
      required_error: "Description is required",
    }),
  })
  .refine((data) => data.checkIn <= data.checkOut, {
    message: "EndDate not bigger then startDate ",
  });

export const vacationValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const vacation = req.body;

  vacation.checkOut = new Date(vacation.checkOut);
  vacation.checkIn = new Date(vacation.checkIn);

  vacation.price = parseInt(vacation.price);

  try {
    if (req.route.path == "/vacations") {
      vacationchema.parse(vacation);
    } else {
      vacationchemaedit.parse(vacation);
    }

    next();
  } catch (err) {
    res.json(err);
  }
};
