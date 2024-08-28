import express, { Request, Response, NextFunction } from "express";
import path, {dirname} from "path";
import { fileURLToPath, URL } from 'url';

import {router} from "./routes/router";


const app = express();
const port = 9001;


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", router);

function getDirname(importMetaUrl: string | URL) {
  const filename = fileURLToPath(importMetaUrl);
  return dirname(filename);
}
const __dirname = getDirname(import.meta.url)
const assetsPaths = path.join(__dirname, "public");
app.use(express.static(assetsPaths));

app.listen(port, () => {
  console.log(`M•M•B App listening on port : ${port}`);
});