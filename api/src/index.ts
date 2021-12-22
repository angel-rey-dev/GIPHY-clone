import express from "express";
import router from "./routes/index";

const server = express();
const port = process.env.PORT || 4000;

// Middlewares
server.use(express.json());
server.use(router);


server.listen(port, () => console.log("Server is running on port 4000"));