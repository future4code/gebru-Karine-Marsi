import {Request, Response} from "express";
import {users} from "./data";

export const exercicio2 = (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const type = req.query.type as string;
        if (!type){
            throw new Error("Não foi dessa vez, reveja seu código!")
        }
        const filtro = users.filter(usuario => usuario.type.toLowerCase() === type.toLowerCase())
        
    } catch (error:any) {
        res.status(errorCode).send(error.message);
    }
}