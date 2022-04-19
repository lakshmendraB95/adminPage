import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { router } from "./routes/userRoutes";
import cookieSession from "cookie-session";
import { Approuter } from "./appRouter";
import "./controllers/loginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["lakshmendra"] }));
app.use(router);
app.use(Approuter.getInstance());

app.listen(3000, () => {
  console.log("listening on 3000");
});
