import { Router } from "express";
import { knex } from ".";

const api = Router();

interface IBody {
  name: string;
  line: number;
  place: string;
}

api
  .route("/ticket/:name")
  .get(async (req, res) => {
    const name = req.params.name;
    const row = await knex
      .select("NAME", "LINE", "PLACE")
      .from("ticket")
      .where("USERNAME", name);
    console.log(row);
    res.send(row).writeHead(200);
  })
  .post(async (req, res) => {
    console.log(req.body);
    const USERNAME = req.params.name;
    const { name: NAME, place: PLACE, line: LINE }: IBody = req.body;
    const result = await knex("TICKET").insert({ NAME, LINE, PLACE, USERNAME });
    res.writeHead(200).json(result);
  });

api.route("/").get((_, res) => {
  res.send("a");
});

export default api;
