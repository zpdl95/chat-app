import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { io, Socket } from "socket.io-client";
import {
  avatarAtom,
  db,
  makeRoomLayerAtom,
  nickNameAtom,
  roomList,
  roomName,
} from "../../recoil/atoms";
import LeftSidebar from "../../Components/LeftSidebar";
import { ClientToServerEvents, ServerToClientEvents } from "../api/socket";
import MessageWrapper from "../../Components/MessageWrapper";
import UserContainer from "../../Components/UserContainer";
import MessageForm from "../../Components/MessageForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/sharp-solid-svg-icons";
import {
  faBell,
  faThumbTack,
  faUsers,
  faMagnifyingGlass,
  faInbox,
  faCircleQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LeftNameSpace from "../../Components/LeftNameSpace";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io({
  path: "/api/socket",
  autoConnect: false,
});

export interface IAllSockets {
  id: string;
  nickName: string;
  avatar: string;
}

interface IHeaderIcon {
  icon: JSX.Element;
}

interface IFormData {
  roomName: string;
}

const ChatsPage: NextPage = () => {
  const [nickName, setNickName] = useRecoilState(nickNameAtom);
  const makeRoomLayer = useRecoilValue(makeRoomLayerAtom);
  const avatar = useRecoilValue(avatarAtom);
  const [chatDb, setChatDb] = useRecoilState(db);
  const [rN, setRN] = useRecoilState(roomName);
  const [allSockets, setAllSockets] = useState<IAllSockets[]>();
  const [allRooms, setAllRooms] = useRecoilState(roomList);

  function socketJoinRoom(
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
    roomName: string
  ) {
    socket.emit("join_room", roomName);
  }

  function socketSetUserData(
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
    nickName: string,
    avatar: string
  ) {
    socket.emit("set_user_data", nickName, avatar);
  }

  function showAllSockets(
    socket: Socket<ServerToClientEvents, ClientToServerEvents>
  ) {
    socket.emit("show_all_sockets");
  }
  useEffect(() => {
    socket.connect();
  }, []);
  useEffect(() => {
    socketSetUserData(socket, nickName, avatar);
  }, [nickName, avatar]);
  useEffect(() => {
    socketJoinRoom(socket, rN);
  }, [rN]);
  useEffect(() => {
    showAllSockets(socket);
  }, []);

  useEffect(() => {
    socket.off("recevied_message");
    socket.on("recevied_message", (roomName, nickName, avatar, text, day) => {
      setChatDb((prev) => {
        return {
          ...prev,
          [roomName]: [...prev[roomName], { nickName, avatar, text, day }],
        };
      });
    });
    socket.on("show_all_sockets", setAllSockets);
    socket.on("room_change", setAllRooms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNickName(JSON.parse(localStorage.getItem("nickName") as string));
  }, [setNickName]);

  return (
    <div className="background ; w-full h-full relative grid grid-cols-[4.5rem_1fr] overflow-hidden">
      <LeftNameSpace />
      <section className="main-section ; h-full w-full grid grid-cols-[15rem_1fr] bg-zinc-800">
        <LeftSidebar allRooms={allRooms} socket={socket} />
        <div className="chat ; grid grid-rows-[3rem_1fr] bg-gray-600">
          <Header rN={rN} />
          <div className="content ; grid grid-cols-[1fr_15rem]">
            <main className="content__chat-content ;  grid grid-rows-[1fr_4.5rem]">
              <MessageWrapper />
              <MessageForm socket={socket} />
            </main>
            <UserContainer allSockets={allSockets} />
          </div>
        </div>
      </section>
      {makeRoomLayer && <LayerContainer />}
    </div>
  );
};

const Header = ({ rN }: { rN: string }) => {
  return (
    <section className="title ; flex items-center px-2 shadow-[0_1px_2px_-.5px] shadow-gray-900 z-10">
      <div className="h-[24px] flex flex-auto items-center">
        <div className="w-[24px] mx-2">
          <FontAwesomeIcon
            icon={faHashtag}
            className="w-full h-full text-[24px] text-gray-200"
          />
        </div>
        <div className="mr-2">
          <h1 className="whitespace-nowrap text-[17px] leading-[22px] font-medium text-white-100">
            {rN}
          </h1>
        </div>
      </div>
      <div className="h-[24px] flex items-center">
        <div className="flex items-center justify-center mx-2 w-6 h-6 group">
          <HeaderIcon icon={<FontAwesomeIcon icon={faHashtag} />} />
        </div>
        <div className="flex items-center justify-center mx-2 w-6 h-6 group">
          <HeaderIcon icon={<FontAwesomeIcon icon={faBell} />} />
        </div>
        <div className="flex items-center justify-center mx-2 w-6 h-6 group">
          <HeaderIcon icon={<FontAwesomeIcon icon={faThumbTack} />} />
        </div>
        <div className="flex items-center justify-center mx-2 w-6 h-6 group">
          <HeaderIcon icon={<FontAwesomeIcon icon={faUsers} />} />
        </div>
        <div className="h-full w-36 mx-2">
          <div className="h-full w-full flex items-center rounded-md p-[2px] bg-gray-900">
            <input
              type="text"
              placeholder=" 검색하기"
              className="w-full p-[2px] flex-1 text-base outline-none bg-transparent caret-white placeholder-gray-100/60 text-gray-100"
            />
            <div className="w-[24px] h-[24px] flex justify-center items-center cursor-text text-sm text-gray-100">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mx-2 w-6 h-6 group">
          <HeaderIcon icon={<FontAwesomeIcon icon={faInbox} />} />
        </div>
        <div className="flex items-center justify-center mx-2 w-6 h-6 group">
          <HeaderIcon icon={<FontAwesomeIcon icon={faCircleQuestion} />} />
        </div>
      </div>
    </section>
  );
};

const HeaderIcon = ({ icon }: IHeaderIcon) => {
  return (
    <div className="아이콘위치 ; w-full h-full relative flex flex-col justify-center cursor-pointer text-xl text-gray-100 group-hover:text-gray-50 group">
      {icon}
      <div className="툴팁위치 ; absolute w-full top-5 flex justify-center pointer-events-none z-10">
        <div className="꼭짓점위치 ; fixed flex flex-col-reverse items-center ; scale-0 group-last:group-hover:scale-100 transition-all ease-in-out duration-75">
          <span className="px-3 py-2 rounded-md shadow-md text-sm text-white-200 bg-black">
            넣고싶은 텍스트
          </span>
          <div className="border-solid border-transparent border-[5px] border-b-black"></div>
        </div>
      </div>
    </div>
  );
};

const LayerContainer = () => {
  const [open, setOpen] = useState(true);
  const setMakeRoomLayer = useSetRecoilState(makeRoomLayerAtom);
  const [rN, setRN] = useRecoilState(roomName);
  const [allRooms, setAllRooms] = useRecoilState(roomList);
  const { register, handleSubmit, formState } = useForm<IFormData>();
  const router = useRouter();
  const [chatDb, setChatDb] = useRecoilState(db);

  function closeLayer() {
    setOpen(false);
    setTimeout(() => setMakeRoomLayer(false), 200);
  }

  function onValid(data: IFormData) {
    setRN(data.roomName);
    setChatDb((db) => {
      return { ...db, [data.roomName]: [] };
    });
    router.push({
      pathname: `/chats/${data.roomName}`,
    });
    closeLayer();
  }

  return (
    <div
      className={`layerContainer ; absolute top-0 left-0 bottom-0 right-0 z-20`}
    >
      <div
        onClick={closeLayer}
        className={`backdrop ; fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-80 ${
          open ? "animate-bgOpen" : "animate-bgClose"
        }`}
      ></div>
      <div className="layer ; w-full h-full flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onValid)}
          className={`${open ? "animate-formOpen" : "animate-formClose"}`}
        >
          <div className="w-[460px] h-[500px] relative rounded-xl bg-gray-600">
            <div className="absolute w-full h-full grid grid-rows-[1fr_3fr_1fr]">
              <div className="flex p-4">
                <div className="flex-auto text-2xl text-white-200">
                  <h1>Room 만들기</h1>
                </div>
                <div className="text-2xl text-gray-500">
                  <div
                    onClick={closeLayer}
                    className="cursor-pointer hover:text-gray-100"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="mb-3 text-white-300">
                  <h2>Room 이름</h2>
                </div>
                <div>
                  <div className="flex rounded-sm p-3 bg-gray-900">
                    <div className="mr-2 text-white-300">
                      <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <input
                      {...register("roomName", {
                        required: "방 이름을 작성해주세요",
                        validate: {
                          existsRoom: function (value) {
                            return (
                              !allRooms.includes(value) ||
                              "이미 존재하는 방입니다."
                            );
                          },
                        },
                      })}
                      type="text"
                      placeholder="새로운 Room"
                      className="flex-auto text-white-300 placeholder-gray-200 outline-none bg-transparent"
                    />
                  </div>
                  <span className="text-red-600">
                    {formState.errors.roomName?.message}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-700 rounded-b-xl">
                <div className="h-full flex flex-row-reverse items-center">
                  <button
                    className="px-4 py-2 rounded-sm text-sm text-white-200 bg-blue-200 hover:bg-blue-200/70"
                    type="submit"
                  >
                    <div>채널 만들기</div>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      closeLayer();
                    }}
                    className="px-4 py-2 text-sm hover:underline text-white-200"
                  >
                    <div className="mx-4">취소</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatsPage;
