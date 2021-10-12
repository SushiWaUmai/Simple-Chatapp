import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer);


const port = process.env.PORT || 4000;

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });
});

httpServer.listen(port, () =>
  console.log(`Server is set up on http://localhost:${port}`)
);
