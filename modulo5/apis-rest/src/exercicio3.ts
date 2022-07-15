import {Request, Response} from "express";
import {users} from "./data";

export const exercicio3 = (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const name = req.query.name as string;
        if (!name){
            errorCode = 422;
            throw new Error("Não foi dessa vez, reveja seu código!")
        }
        const filtro = users.filter(usuario => usuario.name.toLowerCase() === name.toLowerCase()) 

        if(!filtro.length){

         errorCode = 404;
         throw new Error("Esse nome não existe cara!")
        }
        res.send(filtro)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message);
    }
}