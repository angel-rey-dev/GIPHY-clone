import express from "express";
import router from "./routes/index";

const server = express();

// Middlewares
server.use(express.json());
server.use(router);


server.listen(4000, () => console.log("Server is running on port 4000"));
