import Image from "next/image";

const GameImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full aspect-[4/3] overflow-hidden">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300"
    />
  </div>
);

export default GameImage;
