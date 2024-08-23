import { Request, Response, NextFunction, Router } from "express";

const express = require("express");
const router: Router = express.Router();

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

router.get("/", (req: Request, res: Response) => {
  res.render("pages/index", { messages: messages });
});

router.get("/new", (req: Request, res: Response) => {
  res.render("pages/form");
});

router.post("/new", (req: Request, res: Response) => {
  const { messageText, messageUser } = req.body;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
