import Image from "next/image";

interface ComingSoonCardProps {
  game: {
    title: string;
    image: string;
  };
  isLarge?: boolean;
}

const ComingSoonCard = ({ game, isLarge = false }: ComingSoonCardProps) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${
        isLarge ? "aspect-[16/9]" : "h-84"
      }`}
    >
      <Image
        src={game.image}
        alt={game.title}
        fill
        className="object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
        <h3 className="text-white text-sm md:text-base font-semibold leading-tight">
          {game.title}
        </h3>
        <button className="mt-2 w-fit px-3 py-[6px] text-[12px] text-white border border-white rounded-md hover:bg-white hover:text-black transition">
          Pre-order now!
        </button>
      </div>
    </div>
  );
};

export default ComingSoonCard;
