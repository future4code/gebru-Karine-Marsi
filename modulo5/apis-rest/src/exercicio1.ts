
import {Request, Response} from "express";
import {users} from "./data";

export const exercicio1 = ( req:Request, res:Response) => {

 res.send(users)

}
 //a-  Get 