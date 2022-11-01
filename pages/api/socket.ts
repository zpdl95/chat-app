import { Server } from "socket.io";
import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/chat";
import socketServerHandler from "../../socketServerFn/socketServerHandler";
import dayjs from "dayjs";

export interface ClientToServerEvents {
  join_room: (roomName: string) => void;
  send_message: (
    roomName: string,
    nickName: string,
    avatar: string,
    text: string
  ) => void;
  set_user_data: (nickName: string, avatar: string) => void;
  show_all_sockets: () => void;
}

export interface ServerToClientEvents {
  recevied_message: (
    roomName: string,
    avatar: string,
    nickName: string,
    text: string,
    day: dayjs.Dayjs
  ) => void;
  show_all_sockets: (
    allSockets: { id: string; nickName: string; avatar: string }[]
  ) => void;
  room_change: (rooms: string[]) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  nickName: string;
  avatar: string;
}

export default function socketIoHanddler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (!res.socket.server.io) {
    console.log("소켓 서버를 실행...");

    const socketIoServer = new Server<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >(res.socket.server, {
      path: "/api/socket",
    });
    res.socket.server.io = socketIoServer;

    socketIoServer.on("connection", (socket) =>
      socketServerHandler(socket, socketIoServer)
    );
  } else {
    console.log("이미 소켓 서버가 실행중...");
  }
  res.end();
}
