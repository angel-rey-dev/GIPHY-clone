import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index";

const server = express();
const port = process.env.PORT || 4000;

// Middlewares
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use("/", routes);

server.listen(port, () => console.log("Server is running on port 4000"));


export default server;
