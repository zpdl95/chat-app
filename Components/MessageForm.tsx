import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../pages/api/socket";
import { avatarAtom, nickNameAtom, roomName } from "../recoil/atoms";

interface IFormData {
  textarea: string;
}

const MessageForm = ({
  socket,
}: {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}) => {
  const rN = useRecoilValue(roomName);
  const nickName = useRecoilValue(nickNameAtom);
  const avatar = useRecoilValue(avatarAtom);
  const { setValue, register, handleSubmit } = useForm<IFormData>();
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      formRef.current?.requestSubmit();
      setValue("textarea", "");
    }
    return;
  }

  function onValid(data: IFormData) {
    socket.emit("send_message", rN, nickName, avatar, data.textarea);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onValid)}>
      <div className="channel-text-area ; w-full h-full px-4">
        <div className="h-[65%] flex px-10 rounded-lg bg-gray-500">
          <div className="w-full">
            <textarea
              {...register("textarea", { required: true })}
              placeholder="메시지 작성..."
              onKeyDown={onSubmit}
              rows={1}
              className="w-full text-base outline-none overflow-y-auto resize-none py-3 placeholder-gray-200 text-white-300 bg-transparent"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};
export default MessageForm;
