import { Router, Request, Response } from "express";
import field from "./field";
import category from "./category";
import food from "./food";

const routes = Router();

routes.use("/food", food);
routes.use("/category", category);
routes.use("/field", field);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.status(404).json({message:"Requisição desconhecida"}) );

export default routes;
