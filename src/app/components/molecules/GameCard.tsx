import ImageCard from "../atoms/ImageCard";
import Price from "../atoms/Price";
import DiscountBadge from "../atoms/DiscountBadge";
import { Game } from "../../data/BestGame";

const GameCard = ({ game }: { game: Game }) => (
  <div className="bg-white rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-200">
    <ImageCard src={game.image} alt={game.title} />
    <div className="p-3">
      <h3 className="text-sm font-semibold text-gray-800 mb-1">{game.title}</h3>
      {game.price === 0 ? (
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          Free Download
        </span>
      ) : (
        <div className="flex items-center justify-between">
          <Price price={game.price} />
          {game.discount > 0 && (
            <DiscountBadge
              discount={game.discount}
              originalPrice={game.originalPrice}
            />
          )}
        </div>
      )}
    </div>
  </div>
);
export default GameCard;
