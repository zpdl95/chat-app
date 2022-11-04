import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import _ from "underscore";
import { db, roomName } from "../recoil/atoms";
import ChatMessage from "./ChatMessage";

const MessageWrapper = () => {
  const chatDb = useRecoilValue(db);
  const [rN, setRN] = useRecoilState(roomName);
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollEventHandler() {
    let scrollTop = scrollerRef.current?.scrollTop;
    const clientHeight = scrollerRef.current?.clientHeight;
    const scrollHeight = scrollerRef.current?.scrollHeight;
    if (scrollTop === 0) {
      scrollTop = 1;
    }
    if (scrollTop && clientHeight && scrollHeight) {
      setAutoScroll(
        scrollTop + clientHeight >= scrollHeight - 30 ? true : false
      );
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callbackEventHandler = useCallback(
    _.debounce(scrollEventHandler, 100),
    []
  );

  useEffect(() => {
    scrollerRef.current?.addEventListener("scroll", callbackEventHandler);
  }, [callbackEventHandler]);
  useEffect(() => {
    if (autoScroll) {
      scrollRef.current?.scrollIntoView(false);
    }
  }, [chatDb[rN]]);

  return (
    <div className="messagesWrapper ; relative">
      <div
        ref={scrollerRef}
        className="scroller ; w-full h-full absolute top-0 left-0 overflow-y-scroll overflow-x-hidden"
      >
        {chatDb[rN]?.map((chat, index) => {
          return (
            <ChatMessage
              key={index}
              nickName={chat.nickName}
              chat={chat.text}
              avatar={chat.avatar}
              day={chat.day}
            />
          );
        })}
        <div className="h-[30px]"></div>
        <div ref={scrollRef}></div>
      </div>
    </div>
  );
};
export default MessageWrapper;
