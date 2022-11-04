import Image from "next/image";

const ImageComponent = ({ avatar }: { avatar: string }) => {
  return (
    <Image
      className="rounded-full"
      src={`/avatar/${avatar}.jpg`}
      alt="avatar"
      width={48}
      height={48}
    />
  );
};

export default ImageComponent;
