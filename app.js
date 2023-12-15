import session from "express-session";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoutes from "./users/routes.js";

dotenv.config();

const app = express();


app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000" || process.env.FRONTEND_URL,
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));



import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING);

app.use(express.json());

UserRoutes(app);

app.listen(process.env.PORT || 4000);
