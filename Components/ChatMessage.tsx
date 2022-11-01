import dayjs from "dayjs";
import "dayjs/locale/ko";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { prefixAtom } from "../recoil/atoms";

dayjs.locale("ko");
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

interface IChatMessage {
  nickName: string;
  chat: string;
  day: dayjs.Dayjs;
  avatar: string;
}

const ChatMessage = ({ nickName, chat, day, avatar }: IChatMessage) => {
  const dateFormatLT = dayjs(day).format("LT");
  const dateFormatL = dayjs(day).format("L");
  const fromNow = dayjs(day).fromNow();
  const prefix = useRecoilValue(prefixAtom);

  function isTodayOrIsYesterday(day: dayjs.Dayjs) {
    if (dayjs(day).isToday()) {
      return true;
    } else if (dayjs(day).isYesterday()) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <li className="chat-message ; w-full mt-[17px] animate-[wiggle_1s_ease-in-out_infinite] hover:bg-gray-700/90">
      <div className="message__grid ; w-full pt-1 pb-2 grid grid-cols-[72px_1fr_48px]">
        <div className="message__avatar ; relative">
          <div className="avatar ; absolute left-1/2 translate-x-[-50%] rounded-full w-[40px] h-[40px] bg-white">
            {avatar && (
              <Image
                className="rounded-full"
                src={`${prefix}/avatar/${avatar}.jpg`}
                alt="avatar"
                width={48}
                height={48}
              />
            )}
          </div>
        </div>
        <div className="message__content ; grid grid-rows-[22px_1fr]">
          <h2>
            <span className="nickName ; mr-1 text-white-100">{nickName}</span>
            <span className="time ; ml-1 text-xs text-gray-300">
              {isTodayOrIsYesterday(day)
                ? `${fromNow} ${dateFormatLT}`
                : dateFormatL}
            </span>
          </h2>
          <div className="text-white-300">{chat}</div>
        </div>
        <div></div>
      </div>
    </li>
  );
};
export default ChatMessage;
