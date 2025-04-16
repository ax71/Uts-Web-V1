import Image from "next/image";

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 50vw, 25vw"
    />
  </div>
);

export default ImageCard;
