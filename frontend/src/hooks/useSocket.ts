import { useEffect } from "react";
import { Socket } from "socket.io-client";
import { socket } from "../App";

export default function useSocket(fn: (socket: socket) => void) {
  useEffect(() => {
    socket.connect();

    fn(socket);

    return () => {
      console.log("socket disconnect");
      socket.disconnect();
    };
  }, []);
}
