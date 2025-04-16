import GameCard from "../molecules/GameCard";
import { bestSellers } from "../../data/BestGame";

const BestSellerGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
    {bestSellers.map((game, index) => (
      <GameCard key={index} game={game} />
    ))}
  </div>
);

export default BestSellerGrid;
