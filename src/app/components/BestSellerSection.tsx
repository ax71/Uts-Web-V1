"use client";

import Image from "next/image";

const bestSellers = [
  {
    title: "Minecraft",
    image: "/images/Xbox Game Store Thumbnail 3.png",
    price: 260000,
    originalPrice: 260000,
    discount: 0,
  },
  {
    title: "Asphalt 9: Legends",
    image: "/images/Xbox Game Store Thumbnail 2.png",
    price: 0,
    originalPrice: 0,
    discount: 0,
  },
  {
    title: "The Witcher 3",
    image: "/images/Xbox Game Store Thumbnail 1.png",
    price: 400000,
    originalPrice: 590000,
    discount: 25,
  },
  {
    title: "Surviving Mars",
    image: "/images/Xbox Game Store Thumbnail.png",
    price: 440000,
    originalPrice: 440000,
    discount: 0,
  },
];

const formatRupiah = (value: number) => {
  if (value === 0) return "Free Download";
  return `Rp ${value.toLocaleString("id-ID")}`;
};

const BestSellerSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Best Seller Games
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span
                    className={`text-sm ${
                      game.price === 0 ? "text-blue-600" : "text-indigo-600"
                    } font-medium`}
                  >
                    {formatRupiah(game.price)}
                  </span>
                  {game.discount > 0 && (
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-1.5 py-0.5 rounded">
                        {game.discount}%
                      </span>
                      <span className="line-through">
                        {formatRupiah(game.originalPrice)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
