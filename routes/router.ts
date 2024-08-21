import { Request, Response, NextFunction, Router } from "express";

const express = require("express");
const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("pages/form");
});

module.exports = router;
