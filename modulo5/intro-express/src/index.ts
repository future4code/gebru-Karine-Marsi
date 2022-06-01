import express, {Request, Response} from "express";
import cors from "cors";

const app = express()
app.use(express.json());
app.use(cors());

app.listen (3003, () => {

    console.log("Bora?")
})
//2

type User ={
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

//3
    const user:User[] = [{
        id:36, 
        name:"Kakau" ,
        phone:"11958586780", 
        email:"karine.marsi@gmail.com",
        website:"httpKakau"},
    {
    id:28, 
 name:"Bruno" ,
 phone:"31973089997", 
 email:"bruno.gebru@gmail.com",
 website:"httpBruno"},
 
 {id:24, 
    name:"Otacilia" ,
    phone:"35973089998", 
    email:"otacilia.gebru@gmail.com",
    website:"httpotacilia"}
]
 //4
app.get("/user", (req:Request, res: Response) => {

    res.send({resultado:user})
})

//5

type Posts = {
id: number,
title: string,
body: string,
userId:number
}

//6

const posts: Posts []= [{
id:85,
title: "Minha primeira API",
body:" O Bruno e zuou mas eu consegui",
userId:36
},
{id:82, 
title: "Eu amo a minha turma Gebru",
body:"O plantão da Gebru é o melhor de todos",
userId:28
},
{id:48, 
    title: "Mochileiro das Galáxias",
    body:"Pra ser meu amigo você tem que ler toda a coleção Mochileiro das Galáxias",
    userId:24}]

//7

app.get("/posts/:userId", (req:Request, res: Response) => {
   
const userId = req.params.userId

 res.send({resultado:userId})
})

//8
app.get("/usuario/:id", (req:Request, res: Response) => {
    
    const id = Number (req.params.id)
    
    const usuarioFiltrado = posts.filter(user =>user.userId ===id)
    
    res.send(usuarioFiltrado)
})