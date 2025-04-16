import Image from "next/image";
import GenreNameOverlay from "../atoms/GenreNameOverlay";

interface GenreCardProps {
  name: string;
  image: string;
}

const GenreCard = ({ name, image }: GenreCardProps) => (
  <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-md group">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <GenreNameOverlay name={name} />
  </div>
);

export default GenreCard;
