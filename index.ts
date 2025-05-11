import dotenv from "dotenv";
import { server } from "./src/server";
import { openDbConnection } from "./src/db";

dotenv.config();

openDbConnection()
  .then(() => {
    console.log('Database connected successfully');
    return server.start();
  })
  .catch((error) => console.error("failed to start server", error.message));









