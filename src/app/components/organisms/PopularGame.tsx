"use client";

import { popularGames } from "../../data/PopularGame";
import SectionTitle from "../atoms/SectionTitle";
import BrowseLink from "../atoms/BrowseLink";
import GameCard from "../molecules/GameCard";

const PopularGame: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle title="Popular Games" />
          <BrowseLink />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popularGames.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGame;
