import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { usersRoutes } from "./routes/users.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);
export default app;
