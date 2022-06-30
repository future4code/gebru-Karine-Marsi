
// import express, { Express,Request, Response} from "express";
// import knex from "knex";
// import cors from "cors";
// import dotenv from "dotenv";
// import { AddressInfo } from "net";
// import {connection} from "./connection"

// const app: Express = express();
// app.use(express.json());
// app.use(cors());

// //Criar usuário

// app.post("users", async (req:Request, res: Response):Promise<void> => {

//     try{
//         let novoUsuario = await(
//             req.body.name,
//             req.body.nickname,
//             req.body.email
//         )
//         res.status(201).send("Usuario criado com sucesso")
//     }catch(err:any){
//             res.status(500).send(err.sqlMassage || err.message)
//     }
// })

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//        const address = server.address() as AddressInfo;
//        console.log(`Server is running in http://localhost: ${address.port}`);
//     } else {
//        console.error(`Failure upon starting server.`);
//     }
// });

// // Pesquisar usuários 
// app.get("/user", async (req: Request, res: Response): Promise<void> => {
//     let errorCode: number = 500
//     try {
//         const query: string = String(req.query.query)

//         if (!query) {
//             errorCode = 422
//             throw new Error("Busca do nome do usuário não enviada")
//         } else {
//             const result = await connection("Users")
//                 .select('id', 'nickname')
//                 .where('nickname', 'like', `%${query}%`)
//                 .orWhere('email', 'like', `%${query}%`)

//             res.status(200).send({ users: result })
//         }
//     }
//     catch (err: any) {
//         res.status(errorCode).send(err.sqlMessage || err.message)
//     }
// })

// // Pegar usuario pelo id

// app.get("/user/id", async (req: Request, res: Response):Promise<void> => {
//  let errorCode: number = 500

//  try{
//     const userId: string = req.params.id
//     const results = await connection("Users")
//     .select ("id","nickname")
//     .where( {id: userId})
 
// if (!results[0]){
//     errorCode = 404
//     throw new Error("Usuário com id ${userId} não encontrado")
// } else {
//     res.status(200).send({user:results[0]})
// } 
//  }
// catch (err: any) {
//     res.status(errorCode).send(err.sqlMessage || err.message)
//     }
//  })


// // Editar usuário
// app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
//     let errorCode: number = 500
//     try {
//         const userId: string = req.params.id
//         const { name, nickname, email } = req.body

//         if (name === "" || nickname === "" || email === "") {
//             errorCode = 422
//             throw new Error("Um ou mais campos vazios")
//         } else {
//             await connection("Users")
//                 .update({ name, nickname, email })
//                 .where({ id: userId })

//             res.status(200).send(`Usuário ${nickname} atualizado com sucesso!`)
//         }
//     }
//     catch (err: any) {
//         res.status(errorCode).send(err.sqlMessage || err.message)
//     }
// })

// // Criar tarefa
// app.post("/task", async (req: Request, res: Response): Promise<void> => {
//     let errorCode: number = 500
//     try {
//         const { title, description, deadline, creatorId } = req.body

//         if (!title || !description || !deadline || !creatorId) {
//             errorCode = 422
//             throw new Error("Um ou mais campos vazios")
//         } else {
//             await connection("Tasks")
//                 .insert({
//                     id: Date.now().toString(),
//                     title,
//                     description,
//                     deadline: (deadline),
//                     creator_id: creatorId
//                 })

//             res.status(201).send("Tarefa criada com sucesso!")
//         }
//     }
//     catch (err: any) {
//         res.status(errorCode).send(err.sqlMessage || err.message)
//     }

// // Pegar tarefa pelo id
// app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
//     let errorCode: number = 500
//     try {
//         const taskId: string = req.params.id

//         if (taskId) {
//             const result = await connection("Tasks")
//                 .select(
//                     'Tasks.id as taskId',
//                     'title',
//                     'deadline',
//                     'status',
//                     'description',
//                     'creator_id as creatorUserId',
//                     'nickname as creatorUserNickname',
//                 )
//                 .join('Users', { 'Users.id': 'Tasks.creator_id' })
//                 .where('Tasks.id', taskId)

//             const responsibleUsers = await connection("Tasks")
//                 .select('user_id as id', 'nickname')
//                 .join('to_do_list', { 'Tasks.id': 'task_id' })
//                 .join('Users', { 'Users.id': 'user_id' })
//                 .where('Tasks.id', taskId)

//             if (!result[0]) {
//                 errorCode = 404
//                 throw new Error(`Task com id ${taskId} não encontrada`)
//             } else {
//                 const newResult = {
//                     ...result[0],
//                     deadline: (result[0].deadline),
//                     responsibleUsers
//                 }

//                 res.status(200).send({ task: newResult })
//             }
//         }
//     }
//     catch (err: any) {
//         res.status(errorCode).send(err.sqlMessage || err.message)
//     }
// }
