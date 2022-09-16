import http from "http";
import { Server } from "socket.io";

function webSocket(server: http.Server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("new socket connected");
    socket.on("setname", (data: any) => {
      console.log(data);
    });

    socket.on("disconnect", () => console.log("socket disconnected"));
  });
}

export default webSocket;
