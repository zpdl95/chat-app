import { Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";
import { Server as httpServer } from "http";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: httpServer & {
      io: SocketIOServer;
    };
  };
};
