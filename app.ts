import { Request, Response, NextFunction } from "express";

const express = require("express");
const app = express();
const PORT = 9001;

const newMessageRouter = require("./routes/router");

app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req: Request, res: Response) => {
  res.render("pages/index", { messages: messages });
});

app.use("/new", newMessageRouter);

// app.get("/new", (req: Request, res: Response) => {
//   res.render("pages/new");
// });

app.listen(PORT, () => {
  console.log(`MMB App listening on port : ${PORT}`);
});
