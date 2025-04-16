import GameImage from "../atoms/GameImage";
import GameTitle from "../atoms/GameTitle";
import PreOrderButton from "../atoms/PreOrderButton";

const GameCard = ({
  game,
  isLarge = false,
}: {
  game: { title: string; image: string };
  isLarge?: boolean;
}) => {
  return (
    <div
      className={`relative w-full ${
        isLarge ? "h-64 md:h-80" : "h-40 md:h-48"
      } rounded-lg overflow-hidden group`}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
        <GameImage src={game.image} alt={game.title} />
      </div>

      <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8">
        <GameTitle title={game.title} />
        <PreOrderButton />
      </div>
    </div>
  );
};

export default GameCard;
