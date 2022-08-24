import { create } from "domain";
import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieController";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("Minha primeira API em NODE.JS");
  })
  .post("/movie", createMovie);
