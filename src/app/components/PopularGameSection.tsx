"use client";

import Image from "next/image";

const games = [
  {
    title: "GTA V",
    image: "/images/Xbox Game Store-1.png",
    price: 590000,
    discountPrice: 354000,
    discount: "40%",
    isFree: false,
  },
  {
    title: "ROBLOX",
    image: "/images/Xbox Game Store-4.png",
    price: 0,
    discountPrice: 0,
    discount: "",
    isFree: true,
  },
  {
    title: "NBA 2K22",
    image: "/images/Xbox Game Store-2.png",
    price: 990000,
    discountPrice: 297000,
    discount: "70%",
    isFree: false,
  },
  {
    title: "Dead by Daylight",
    image: "/images/Xbox Game Store-3.png",
    price: 429000,
    discountPrice: 214500,
    discount: "50%",
    isFree: false,
  },
  {
    title: "ARK: Survival Evolved",
    image: "/images/Xbox Game Store-5.png",
    price: 430000,
    discountPrice: 430000,
    discount: "",
    isFree: false,
  },
  {
    title: "Rocket League",
    image: "/images/Xbox Game Store-6.png",
    price: 0,
    discountPrice: 0,
    discount: "",
    isFree: true,
  },
  {
    title: "Call of Duty®: Modern Warfare® II",
    image: "/images/Xbox Game Store-9.png",
    price: 429000,
    discountPrice: 214500,
    discount: "50%",
    isFree: false,
  },
  {
    title: "NBA 2K24",
    image: "/images/Xbox Game Store-10.png",
    price: 990000,
    discountPrice: 297000,
    discount: "70%",
    isFree: false,
  },
];

const PopularGameSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Games</h2>
          <a
            href="#"
            className="text-blue-700 text-sm font-semibold hover:underline"
          >
            Browse all games
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold text-gray-800 mb-1 line-clamp-1">
                  {game.title}
                </h3>
                {game.isFree ? (
                  <span className="text-blue-700 text-xs font-bold bg-blue-50 px-2 py-1 rounded inline-block">
                    Free Download
                  </span>
                ) : (
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <span className="text-blue-700 font-bold text-xs">
                        Rp {game.discountPrice.toLocaleString("id-ID")}
                      </span>
                      {game.discount && (
                        <span className="text-pink-600 font-bold bg-pink-50 text-[10px] px-1 py-0.5 rounded">
                          {game.discount}
                        </span>
                      )}
                    </div>
                    {game.price !== game.discountPrice && (
                      <span className="line-through text-gray-400 text-[10px] block">
                        Rp {game.price.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGameSection;
