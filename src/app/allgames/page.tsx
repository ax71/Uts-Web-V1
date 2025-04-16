import { bestSellers } from "../data/BestGame";
import GameCard from "../components/molecules/GameCard";

const AllGamePage = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-12 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
        All Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellers.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </section>
  );
};

export default AllGamePage;
