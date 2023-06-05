require("dotenv").config();
import videoRoute from "./routes/videoRoute";
import tagRoute from "./routes/tagRoute";

import express, { Request, Application, Response } from "express";
import { connectMongoDB } from "./config/db";
const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;
connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/uploads"));

app.use("/api/video", videoRoute);
app.use("/api/tags", tagRoute);

app.get("/", (req: Request, res: Response) => res.send("Hello World!!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
