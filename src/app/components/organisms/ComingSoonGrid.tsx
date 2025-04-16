import { comingSoonGames } from "../../data/ComingSoon";
import ComingSoonCard from "../molecules/ComingSoonCard";

const ComingSoonGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 grid grid-rows-2 gap-4">
        {comingSoonGames.slice(0, 2).map((game, index) => (
          <ComingSoonCard key={index} game={game} isLarge />
        ))}
      </div>
      <div className="grid grid-rows-3 gap-4">
        {comingSoonGames.slice(2).map((game, index) => (
          <ComingSoonCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default ComingSoonGrid;
