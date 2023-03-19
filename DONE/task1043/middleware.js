import { getFormattedDate } from "./functions.js";

export const logRequestTimestamp = (req,res,next) => {
  console.log(getFormattedDate());
  next();
}

export const logRequestType = (req, res, next) => {
  console.log(`Received ${req.method} request`);
  next();
}