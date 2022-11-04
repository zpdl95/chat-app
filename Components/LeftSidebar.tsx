import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus as faSharpPlus,
  faChevronDown,
  faHashtag,
} from "@fortawesome/sharp-solid-svg-icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  avatarAtom,
  db,
  makeRoomLayerAtom,
  nickNameAtom,
  roomName,
} from "../recoil/atoms";
import { Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../pages/api/socket";
import { useRouter } from "next/router";
import ImageComponent from "./Image";

interface ILeftSidebar {
  allRooms: string[] | undefined;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}

const LeftSidebar = ({ allRooms, socket }: ILeftSidebar) => {
  return (
    <div className="left-section ; grid grid-rows-[3rem_1fr_3.3rem] bg-gray-700">
      <div className="left-section__header ; shadow-[0px_1px_2px_-.5px] shadow-gray-900 z-10">
        <h1 className=""></h1>
      </div>
      <div className="left-section__area ; relative">
        <div className="left-section__channel-list ; w-full h-full absolute overflow-y-scroll overflow-x-hidden  text-gray-400">
          <ul className="">
            <ChatChannel />
            {allRooms &&
              allRooms.map((roomName, index) => (
                <RoomName key={index} rN={roomName} socket={socket} />
              ))}
          </ul>
        </div>
      </div>
      <UserInfo />
    </div>
  );
};

const ChatChannel = () => {
  const setMakeRoomLayer = useSetRecoilState(makeRoomLayerAtom);
  return (
    <li className="chat-channel ; h-[40px] pt-4 group">
      <div className="chat-channel__header ; h-full w-full grid grid-cols-[18px_1fr_18px] pr-2">
        <div className="chevron ; flex justify-center items-center group-hover:text-white-300">
          <FontAwesomeIcon className="text-[8px]" icon={faChevronDown} />
        </div>
        <div className="header__title ; flex items-center group-hover:text-white-300">
          <h2 className="text-xs">채팅 채널</h2>
        </div>
        <div
          onClick={() => setMakeRoomLayer(true)}
          className="header__add icon ; flex justify-center items-center cursor-pointer"
        >
          <ChatChannelIcon />
        </div>
      </div>
    </li>
  );
};

const ChatChannelIcon = () => {
  return (
    <div className="아이콘위치 ; relative flex flex-col cursor-pointer group z-20">
      <FontAwesomeIcon icon={faSharpPlus} />
      <div className="툴팁위치 ; absolute w-full -top-12 flex justify-center pointer-events-none">
        <div className="꼭짓점위치 ; fixed flex flex-col items-center ; scale-0 group-last:group-hover:scale-100 transition-all ease-in-out duration-75">
          <span className="px-3 py-2 rounded-md shadow-md text-sm text-white-200 bg-black">
            채팅 채널 만들기
          </span>
          <div className="border-solid border-transparent border-[5px] border-t-black"></div>
        </div>
      </div>
    </div>
  );
};

interface IRoomName {
  rN: string;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}

const RoomName = ({ rN, socket }: IRoomName) => {
  const setRN = useSetRecoilState(roomName);
  const [chatDb, setChatDb] = useRecoilState(db);
  const router = useRouter();

  function onClick() {
    setRN(rN);
    socket.emit("join_room", rN);
    if (!chatDb[rN]) {
      setChatDb((db) => {
        return { ...db, [rN]: [] };
      });
    }
  }
  return (
    <li className="chat-channel ; h-[34px]">
      <div className="list__room ; h-full py-[1px]">
        <div
          className={`h-full flex ml-2 px-2 rounded-md group  ${
            router.query.room === rN
              ? "text-white-100 bg-gray-200"
              : "hover:bg-gray-300"
          }`}
        >
          <Link href={`/chats/${rN}`}>
            <a
              className="h-full flex py-[6px] items-center flex-1 overflow-hidden"
              onClick={onClick}
            >
              <div className="mr-[6px] text-gray-200">
                <FontAwesomeIcon icon={faHashtag} />
              </div>
              <div
                className={`whitespace-nowrap overflow-hidden overflow-ellipsis ${
                  router.query.room === rN ? "" : "group-hover:text-white-300"
                } `}
              >
                {rN}
              </div>
            </a>
          </Link>
          <div></div>
        </div>
      </div>
    </li>
  );
};

const UserInfo = () => {
  const nickName = useRecoilValue(nickNameAtom);
  const avatar = useRecoilValue(avatarAtom);
  return (
    <div className="left-section__user-info ; grid grid-cols-[1.1fr_1fr] bg-gray-800">
      <div className="user-info ; grid grid-cols-[1fr_1.5fr]">
        <div className="user-image ; relative place-self-center rounded-full w-2/3 h-2/3 bg-white">
          {avatar && <ImageComponent avatar={avatar} />}
        </div>
        <div className="user-name ; self-center">
          <div className="user-id ; text-white-100">{nickName && nickName}</div>
          <div className="socketId ; text-xs text-gray-100"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LeftSidebar;
