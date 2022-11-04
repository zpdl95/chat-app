import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { avatarAtom, nickNameAtom } from "../recoil/atoms";
import { useState } from "react";
import ImageComponent from "../Components/Image";

interface IFormData {
  nickName: string;
}

const LoginPage: NextPage = () => {
  const router = useRouter();
  const setNickNameFn = useSetRecoilState(nickNameAtom);
  const [avatar, setAvatar] = useRecoilState(avatarAtom);
  const [openAvatar, setOpenAvatar] = useState(false);
  const { register, handleSubmit } = useForm<IFormData>();
  const avatarList = [
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
    "원숭이",
    "닭",
    "개",
    "돼지",
  ];

  function onValid(data: IFormData) {
    setNickNameFn(data.nickName);
    localStorage.setItem("nickName", JSON.stringify(data.nickName));
    router.push({
      pathname: `/chats/${"일반"}`,
    });
  }

  return (
    <div className="background; min-h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-700">
      <div className="auth-container; w-[420px] h-[292px] rounded-3xl bg-gray-500 shadow-[0_2px_15px] shadow-slate-500">
        <form
          className="auth-form; px-20 py-7"
          onSubmit={handleSubmit(onValid)}
        >
          <h1 className="auth-title; w-full text-center text-2xl text-white pb-5">
            NextJS Chat
          </h1>
          <div className="input-container;">
            <input
              {...register("nickName", { required: true })}
              required
              className="text-input; w-full p-2 mb-6 bg-transparent outline-none border-b-2 border-solid border-indigo-500 text-white-100 placeholder-gray-900"
              type="text"
              placeholder="NickName"
            />
          </div>
          <div className="relative flex justify-center items-center mb-5">
            <div
              onClick={() => setOpenAvatar((prev) => !prev)}
              className="  w-12 h-12 rounded-full bg-white hover:scale-110 transition-transform cursor-pointer"
            >
              {avatar && <ImageComponent avatar={avatar} />}
            </div>
            {openAvatar && (
              <div className="absolute -top-52 w-max flex flex-col items-center">
                <div className="grid grid-cols-4 bg-white rounded-xl p-3 gap-4">
                  {avatarList.map((avatar, index) => (
                    <div
                      key={index}
                      onClick={() => setAvatar(avatar)}
                      className=" w-12 h-12 rounded-full cursor-pointer border-solid border-gray-200 hover:border-4"
                    >
                      <ImageComponent avatar={avatar} />
                    </div>
                  ))}
                </div>
                <div className="border-solid border-transparent border-[5px] border-t-white"></div>
              </div>
            )}
          </div>
          <button
            className="submit-button; w-full bg-indigo-500 hover:bg-indigo-600 duration-300 p-[14px] rounded text-white"
            type="submit"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
