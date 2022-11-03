import { Dayjs } from "dayjs";
import { atom } from "recoil";

export const prefixAtom = atom({
  key: "prefix",
  default:
    process.env.NODE_ENV === "production"
      ? "https://chat-app-kappa-flame.vercel.app/"
      : "",
});

export const nickNameAtom = atom({
  key: "nickName",
  default: "",
});

export const avatarAtom = atom({
  key: "avatar",
  default: "",
});

export const makeRoomLayerAtom = atom({
  key: "makeRoomLayer",
  default: false,
});

interface IChatData {
  nickName: string;
  avatar: string;
  text: string;
  day: Dayjs;
}

interface IDb {
  [roomName: string]: IChatData[];
}

export const db = atom<IDb>({
  key: "db",
  default: {
    일반: [],
  },
});

export const roomName = atom({
  key: "roomName",
  default: "일반",
});

export const roomList = atom<string[]>({
  key: "roomList",
  default: [],
});
