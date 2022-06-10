import express from "express";
import cors from "cors";
import { exercicio1 } from "./exercicio1";
import { exercicio2 } from "./exercicio2";
import {exercicio3} from "./exercicio3";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("listening on http://localhost:3003");
});

app.get("/users", exercicio1);

app.get("/usertype/", exercicio2);

app.get("/username/", exercicio3)