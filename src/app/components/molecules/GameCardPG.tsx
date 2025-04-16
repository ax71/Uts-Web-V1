import GameImage from "../atoms/GameImage";
import GameTitle from "../atoms/GameTitle";
import FreeTag from "../atoms/FreeTag";
import GamePrice from "./GamePrice";

type Game = {
  title: string;
  image: string;
  price: number;
  discountPrice: number;
  discount?: string;
  isFree?: boolean;
};

const GameCard = ({ game }: { game: Game }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 p-4">
    <div className="p-3 pb-0">
      <GameImage src={game.image} alt={game.title} />
    </div>
    <div className="p-3">
      <GameTitle title={game.title} />
      {game.isFree ? (
        <FreeTag />
      ) : (
        <GamePrice
          price={game.price}
          discountPrice={game.discountPrice}
          discount={game.discount}
        />
      )}
    </div>
  </div>
);

export default GameCard;
