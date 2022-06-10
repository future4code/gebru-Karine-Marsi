import express from "express";
import cors from "cors";
import { exercicio1 } from "./exercicio1";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("listening on http://localhost:3003");
});

app.get("/users", exercicio1);
