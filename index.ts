import express, { Router } from "express";
import api from "./api";
import webSocket from "./webSocket";
import { createServer } from "http";
import settingKnex from "knex";

const app = express();
const http = createServer(app);

export const knex = settingKnex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    timezone: "KTC",
    filename: "./database.db",
  },
});

app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.get("/", (_, res) => {
  res.send("<h1>hello world!</h1>");
});

webSocket(http);

http.listen("5000", () => console.log(`server listening on port: 5000`));
