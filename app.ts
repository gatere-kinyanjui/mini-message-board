import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
const PORT = 9001;

const appRouter = require("./routes/router");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", appRouter);

const assetsPaths = path.join(__dirname, "public");
app.use(express.static(assetsPaths));

app.listen(PORT, () => {
  console.log(`M•M•B App listening on port : ${PORT}`);
});
