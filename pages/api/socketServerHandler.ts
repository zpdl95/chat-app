import { Socket, Server } from "socket.io";
import dayjs from "dayjs";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./socket";

export default function socketServerHandler(
  socket: Socket<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >,
  socketServer: Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >
) {
  console.log("소켓 클라이언트와 연결됨...");

  // show all socket event
  socket.onAny((event) => {
    console.log(`Socket Event : ${event}`);
  });

  // set userData event
  socket.on("set_user_data", (nickName, avatar) => {
    socket.data.nickName = nickName;
    socket.data.avatar = avatar;
  });

  // show allSockets event
  socket.on("show_all_sockets", async () => {
    const allSocketList = await allSockets();
    socketServer.sockets.emit("show_all_sockets", allSocketList);
  });

  // show disconnecting allSockets event
  socket.on("disconnecting", async () => {
    const allSocketList = await allSockets();
    const newAllSocketList = allSocketList.filter((s) => s.id !== socket.id);
    socketServer.sockets.emit("show_all_sockets", newAllSocketList);
    socketServer.sockets.emit("room_change", publicRooms());
  });

  // show joinRoom event
  socket.on("join_room", async (roomName) => {
    socket.join(roomName);
    socketServer.sockets.emit("room_change", publicRooms());
  });

  // show sendMsg event
  socket.on("send_message", (roomName, nickName, avatar, text) => {
    const day = dayjs();
    socketServer
      .to(roomName)
      .emit("recevied_message", roomName, nickName, avatar, text, day);
  });

  // 나중에 방에 누가 있는지 알 필요가 있으면 제작
  // async function socketInRoom() {
  //   socket.rooms
  //   const socketInRoom = await socketServer.in(roomName).fetchSockets();
  // }

  function publicRooms() {
    const { sids, rooms } = socketServer.sockets.adapter;
    const publicRooms: string[] = [];
    rooms.forEach((_, key) => {
      if (sids.get(key) === undefined) {
        publicRooms.push(key);
      }
    });
    return publicRooms;
  }

  async function allSockets() {
    const allSockets = (await socketServer.fetchSockets()).map((socket) => {
      return {
        id: socket.id,
        nickName: socket.data.nickName,
        avatar: socket.data.avatar,
      };
    });
    return allSockets;
  }
}
