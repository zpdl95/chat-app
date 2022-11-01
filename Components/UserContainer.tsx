import Image from "next/image";
import { useRecoilValue } from "recoil";
import { IAllSockets } from "../pages/chats/[room]";
import { prefixAtom } from "../recoil/atoms";

interface IUserContainer {
  allSockets: IAllSockets[] | undefined;
}

const UserContainer = ({ allSockets }: IUserContainer) => {
  const prefix = useRecoilValue(prefixAtom);
  return (
    <div className="content__user-container ; bg-gray-700">
      <div className="user-container__list ; w-full h-full relative">
        <ul className="list__scroller ; w-full h-full absolute top-0 left-0 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll">
          {allSockets?.map((socket, index) => (
            <li key={index} className="h-[44px] ml-2 py-[1px]">
              <div className="user-grid-box ; h-full px-2 grid grid-cols-[44px_1fr] rounded-md hover:bg-gray-300 group">
                <div className="user-avatar ; w-[32px] h-[32px] self-center rounded-full bg-white">
                  {socket.avatar && (
                    <Image
                      className="rounded-full"
                      src={`${prefix}/avatar/${socket.avatar}.jpg`}
                      alt="avatar"
                      width={48}
                      height={48}
                    />
                  )}
                </div>
                <div className="user-nickName ; self-center text-gray-400 group-hover:text-white-300">
                  {socket.nickName}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default UserContainer;
