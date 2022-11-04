import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faPlus as faSharpPlus,
  faCompass,
  faArrowDownToBracket,
} from "@fortawesome/sharp-solid-svg-icons";

interface INameSpaceIcon {
  icon: JSX.Element;
  bg: string;
  iconColor: string;
  text?: string;
}

const LeftNameSpace = () => {
  return (
    <nav className="left-namespace ; relative bg-gray-900">
      <div className="w-full h-full absolute flex flex-col pt-3">
        <IconAndToolTip
          bg="blue"
          iconColor="gray"
          icon={<FontAwesomeIcon icon={faDiscord} className="text-2xl" />}
        />
        <Divider />
        <IconAndToolTip
          bg="green"
          iconColor="green"
          icon={<FontAwesomeIcon icon={faSharpPlus} className="text-xl" />}
        />
        <IconAndToolTip
          bg="green"
          iconColor="green"
          icon={<FontAwesomeIcon icon={faCompass} className="text-xl" />}
        />
        <Divider />
        <IconAndToolTip
          bg="green"
          iconColor="green"
          icon={
            <FontAwesomeIcon icon={faArrowDownToBracket} className="text-xl" />
          }
        />
      </div>
    </nav>
  );
};

const IconAndToolTip = ({
  icon,
  bg,
  iconColor,
  text = "tooltip 💡",
}: INameSpaceIcon) => {
  return (
    <div
      className={`아이콘위치 ; relative flex flex-col cursor-pointer ; justify-center h-12 w-12 mb-2 mx-auto rounded-3xl hover:rounded-2xl ${
        iconColor === "gray" ? "text-gray-100" : "text-icon-green"
      } hover:text-white-200 bg-gray-600 ${
        bg === "blue" ? "hover:bg-blue-200" : "hover:bg-green"
      } transition-all duration-100 ease-linear ; before:absolute before:-left-3 before:w-1 before:h-5 before:rounded-tr-full before:rounded-br-full before:bg-white before:scale-0 hover:before:scale-100 before:transition-all before:ease-in-out before:origin-left before:duration-200 before:pointer-events-none ; group`}
    >
      {icon}
      <div className="툴팁위치 ; absolute w-full h-full left-[60px] flex items-center pointer-events-none z-10">
        <div className="꼭짓점위치 ; fixed flex flex-row-reverse items-center ; scale-0 group-hover:scale-100 transition-all ease-in-out origin-left duration-75">
          <span className="whitespace-nowrap px-3 py-2 rounded-md shadow-md text-sm text-white-200 bg-black">
            {text}
          </span>
          <div className="border-solid border-transparent border-[5px] border-r-black"></div>
        </div>
      </div>
    </div>
  );
};

const Divider = () => (
  <hr className="border border-gray-300 rounded-full mx-5 mb-2" />
);

export default LeftNameSpace;
