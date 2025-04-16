import Image from "next/image";

const UserAvatar = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-20 h-20 mx-auto mb-4">
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      className="rounded-full object-cover"
    />
  </div>
);

export default UserAvatar;
