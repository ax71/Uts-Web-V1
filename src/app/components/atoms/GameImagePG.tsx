import Image from "next/image";

const GameImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-square w-full">
    <Image src={src} alt={alt} fill className="object-cover" />
  </div>
);

export default GameImage;
