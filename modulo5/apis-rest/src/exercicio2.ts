import {Request, Response} from "express";
import {users} from "./data";

export const exercicio2 = (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const type = req.query.type as string;
        if (!type){
            errorCode = 422;
            throw new Error("Não foi dessa vez, reveja seu código!")
        }
        const filtro = users.filter(usuario => usuario.type.toLowerCase() === type.toLowerCase()) 

        if(!filtro.length){

         errorCode = 404;
         throw new Error("Isso não faz meu tipo!")
        }
        res.send(filtro)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message);
    }
}